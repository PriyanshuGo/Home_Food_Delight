"use client";
import React, { useState, useEffect } from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent
} from "@/components/ui/card";
import { Trash2 } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogHeader,
  DialogTitle
} from "@/components/ui/dialog";
import { useForm } from "react-hook-form";
import { RootState } from "@/redux/store";
import { useDispatch, useSelector } from 'react-redux';
import { setDeliveryDetails } from "@/redux/DeliveryDetailsSlice";
import { auth } from "@/lib/firebase";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { ConfirmationResult } from "firebase/auth";





interface FormData {
  name: string;
  mobileNumber: string;
  address: string[];
  selectedAddress: string;
  instructions: string;
}

declare global {
  interface Window {
    recaptchaVerifier: RecaptchaVerifier;
  }
}

const DeliveryDetails = () => {
  const deliveryDetails = useSelector((state: RootState) => state.deliveryDetails);
  const [savedAddresses, setSavedAddresses] = useState<string[]>(deliveryDetails.address || []);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [newAddress, setNewAddress] = useState("");
  const [newAddressError, setNewAddressError] = useState("");


  const [otpDialogOpen, setOtpDialogOpen] = useState(false);
  const [confirmationResult, setConfirmationResult] = useState<ConfirmationResult | null>(null);

  const [otp, setOtp] = useState("");
  const [otpStatus, setOtpStatus] = useState("");
  const [resendCooldown, setResendCooldown] = useState(0);

  useEffect(() => {
    if (typeof window !== "undefined" && !window.recaptchaVerifier) {
      window.recaptchaVerifier = new RecaptchaVerifier(auth, "recaptcha-container", {
        size: "invisible",
        callback: (response: string) => {
          // reCAPTCHA solved
        },
        'expired-callback': () => {
          // reCAPTCHA expired
        },
      });
      window.recaptchaVerifier.render().catch(console.error);
    }
  }, []);


  const dispatch = useDispatch();
  useEffect(() => {
    if (deliveryDetails && Object.keys(deliveryDetails).length > 0) {
      reset(deliveryDetails);
    }
    setSavedAddresses(deliveryDetails.address || []);
  }, [deliveryDetails]);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: {
      name: deliveryDetails?.name || '',
      mobileNumber: deliveryDetails?.mobileNumber || '',
      selectedAddress: deliveryDetails?.selectedAddress || ''
    }
  });


  // ✅ Add address logic
  const handleAddAddress = () => {
    if (!newAddress.trim()) {
      setNewAddressError("Address cannot be empty.");
      return;
    }
    if (newAddress.length < 10) {
      setNewAddressError("Address must be at least 10 characters.");
      return;
    }

    const updated = [...savedAddresses, newAddress.trim()];
    setSavedAddresses(updated);
    setValue("selectedAddress", newAddress.trim());
    setNewAddress("");
    setNewAddressError("");
    setDialogOpen(false);
  };


  const handleRemoveAddress = (index: number) => {
    const updated = savedAddresses.filter((_, i) => i !== index);
    const removedAddress = savedAddresses[index];

    setSavedAddresses(updated);
    if (watch("selectedAddress") === removedAddress) {
      setValue("selectedAddress", "");
    }
  };



  // ✅ Final form submit
  const onSubmit = (data: FormData) => {
    if (savedAddresses.length === 0) {
      setNewAddressError("Please add at least one address.");
      return
    }
    const { instructions, ...rest } = data;
    const deliveryDetails = { ...rest, address: savedAddresses };
    console.log(deliveryDetails);
    //remove some key 
    dispatch(setDeliveryDetails(deliveryDetails));

    // Simulate sending OTP here
    setOtpDialogOpen(true);
    handleSendOtp(data.mobileNumber);
    startResendTimer();
    setOtp("");
    setOtpStatus("");
  };

  const handleSendOtp = async (mobileNumber: string) => {
    try {
      const appVerifier = window.recaptchaVerifier;
      const confirmation = await signInWithPhoneNumber(auth, `+91${mobileNumber}`, appVerifier);
      setConfirmationResult(confirmation); // 🔐 Save for OTP verification
      console.log("OTP sent!", confirmation);
    } catch (error) {
      console.error("Failed to send OTP", error);
    }
  };
  const handleVerifyOtp = async () => {
    if (!confirmationResult) {
      console.error("No confirmation result. Please request OTP again.");
      return;
    }

    try {
      await confirmationResult.confirm(otp); // Enter 123456 for test
      alert("Phone verified!");
    } catch (err) {
      console.error("Invalid OTP", err);
    }
  };

  const handleOtpSubmit = async () => {
    if (!confirmationResult) {
      alert("Something went wrong. Please request OTP again.");
      return;
    }

    try {
      await confirmationResult.confirm(otp);
      setOtpStatus("success");
      setTimeout(() => {
        setOtpDialogOpen(false);
        alert("✅ Order placed successfully!");
      }, 1000);
    } catch (err) {
      alert("❌ Invalid OTP");
    }
  };


  // ✅ OTP resend cooldown
  const startResendTimer = () => {
    setResendCooldown(30);
    const interval = setInterval(() => {
      setResendCooldown(prev => {
        if (prev <= 1) {
          clearInterval(interval);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  };

  const handleResendOtp = () => {
    setOtp("");
    startResendTimer();
    setOtpStatus("");
  };

  return (
    <Card className="w-full max-w-3xl mx-auto p-4 rounded-xl shadow-sm border border-muted bg-white">
      <CardHeader>
        <CardTitle className="text-lg text-brown">Delivery Details</CardTitle>
      </CardHeader>

      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* Name */}
          <div className="space-y-2">
            <Label htmlFor="name">Full Name *</Label>
            <Input
              id="name"
              className="form-field"
              placeholder="Enter your full name"
              {...register("name", {
                required: "Name is required",
                minLength: { value: 3, message: "Name must be at least 3 characters" },
                pattern: { value: /^[a-zA-Z\s]+$/, message: "Only letters and spaces allowed" }
              })}
            />
            {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
          </div>

          {/* Mobile Number */}
          <div className="space-y-2">
            <Label htmlFor="mobile">Mobile Number *</Label>
            <Input
              id="mobile"
              className="form-field"
              placeholder="10-digit number"
              type="tel"
              maxLength={10}
              {...register("mobileNumber", {
                required: "Mobile number is required",
                pattern: { value: /^[0-9]{10}$/, message: "Enter a valid 10-digit number" }
              })}
            />
            {errors.mobileNumber && <p className="text-red-500 text-sm">{errors.mobileNumber.message}</p>}
          </div>

          {/* Address */}
          <div className="space-y-2">
            <Label>Delivery Address *</Label>

            {savedAddresses.length === 0 ? (
              <p className="text-sm text-gray-500">No saved addresses yet.</p>
            ) : (
              savedAddresses.map((addr, idx) => (
                <div key={idx} className="flex items-center justify-between gap-2">
                  <label className="flex items-center gap-2 flex-1">
                    <input
                      type="radio"
                      value={addr}
                      {...register("selectedAddress", {
                        required: "Please select a delivery address",
                      })}
                    />
                    <span className="text-sm text-brown">{addr}</span>
                  </label>

                  {savedAddresses.length >= 3 && (
                    <button
                      type="button"
                      onClick={() => handleRemoveAddress(idx)}
                      className="text-red-500 hover:text-red-600"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  )}
                </div>
              ))
            )}
            {errors.selectedAddress && (
              <p className="text-red-500 text-sm">{errors.selectedAddress.message}</p>
            )}
            {newAddressError && savedAddresses.length === 0 && (
              <p className="text-red-500 text-sm">{newAddressError}</p>
            )}



            {/* Dialog to add new address */}
            <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
              <DialogTrigger asChild>
                <Button
                  variant="outline"
                  className="w-full mt-2"
                  disabled={savedAddresses.length >= 3}
                >
                  + Add Delivery Address {savedAddresses.length >= 3 && ("   (Allowed upto 3 addresses)")}
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-xl w-full">
                <DialogHeader>
                  <DialogTitle>Select & Add Delivery Address</DialogTitle>
                </DialogHeader>
                <Textarea
                  id="address"
                  value={newAddress}
                  onChange={(e) => {
                    setNewAddress(e.target.value);
                    if (newAddressError) setNewAddressError(""); // Clear error on typing
                  }}
                  className="form-field"
                  rows={3}
                  placeholder="Enter full delivery address"
                />
                {newAddressError && (
                  <p className="text-red-500 text-sm mt-1">{newAddressError}</p>
                )}

                <Button className="w-full mt-2" onClick={handleAddAddress}>Add Address</Button>
              </DialogContent>
            </Dialog>
          </div>

          {/* Instructions */}
          <div className="space-y-2">
            <Label htmlFor="instructions">Additional Instructions</Label>
            <Textarea
              id="instructions"
              className="form-field"
              rows={3}
              placeholder="e.g., Call before delivery"
              {...register("instructions")}
            />
          </div>

          {/* Confirm */}
          <Button type="submit" className="w-full">Continue</Button>
        </form>
      </CardContent>

      {/* OTP Dialog */}
      <Dialog open={otpDialogOpen} onOpenChange={setOtpDialogOpen}>
        <DialogContent className="max-w-md w-full">
          <DialogHeader>
            <DialogTitle>OTP Verification</DialogTitle>
          </DialogHeader>

          <div className="space-y-4">
            <Input
              placeholder="Enter 6-digit OTP"
              maxLength={6}
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              className="form-field"
            />
            {otpStatus === "error" && <p className="text-red-500 text-sm">Invalid OTP. Try again.</p>}
            {otpStatus === "success" && <p className="text-green-600 text-sm">✅ Verified!</p>}

            <Button onClick={handleOtpSubmit} className="w-full">Submit OTP</Button>

            <div className="text-center text-sm mt-2">
              {resendCooldown > 0 ? (
                <p className="text-muted-foreground">Resend OTP in {resendCooldown}s</p>
              ) : (
                <Button variant="link" type="button" onClick={handleResendOtp} className="text-saffron-dark">
                  Resend OTP
                </Button>
              )}
            </div>
          </div>
        </DialogContent>
      </Dialog>
      <div id="recaptcha-container" />
    </Card>
  );
};

export default DeliveryDetails;
