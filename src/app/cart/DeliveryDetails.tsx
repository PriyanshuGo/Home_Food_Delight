"use client";
import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Dialog, DialogContent, DialogTrigger, DialogHeader, DialogTitle } from '@/components/ui/dialog';

const DeliveryDetails = () => {
    const [name, setName] = useState('');
    const [mobile, setMobile] = useState('');
    const [otp, setOtp] = useState('');
    const [selectedAddress, setSelectedAddress] = useState('');
    const [savedAddresses, setSavedAddresses] = useState<string[]>([]);
    const [instructions, setInstructions] = useState('');

    return (
        <Card className="w-full p-4 rounded-xl shadow-sm border border-muted bg-white">
            <CardHeader>
                <CardTitle className="text-lg">Delivery Details</CardTitle>
            </CardHeader>

            <CardContent className="space-y-4">
                {/* Name */}
                <div className="space-y-2">
                    <Label htmlFor="name">Full Name *</Label>
                    <Input className='form-field' id="name" value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter your full name" />
                </div>

                {/* Mobile + OTP */}
                <div className="space-y-2">
                    <Label htmlFor="mobile">Mobile Number *</Label>
                    <div className="flex items-center gap-2">
                        <Input
                            id="mobile"
                            value={mobile}
                            onChange={(e) => setMobile(e.target.value)}
                            placeholder="10-digit number"
                            className="flex-1 form-field"
                            type="tel"
                            maxLength={10}
                        />
                        <Button type="button">Send OTP</Button>
                    </div>
                </div>

                <div className="flex items-center gap-2">
                    <Input
                        id="otp"
                        value={otp}
                        onChange={(e) => setOtp(e.target.value)}
                        placeholder="Enter OTP"
                        className="flex-1 form-field"
                        maxLength={6}
                    />
                    <Button type="button">Check OTP</Button>
                </div>

                {/* Address Section */}
                <div className="space-y-2">
                    <Label>Delivery Address *</Label>

                    {/* List of saved addresses */}
                    <div className="space-y-1">
                        {savedAddresses.length === 0 && (
                            <p className="text-sm text-gray-500">No saved addresses yet.</p>
                        )}
                        {savedAddresses.map((addr, idx) => (
                            <label key={idx} className="flex items-center gap-2">
                                <input
                                    type="radio"
                                    name="address"
                                    value={addr}
                                    checked={selectedAddress === addr}
                                    onChange={() => setSelectedAddress(addr)}
                                />
                                <span className="text-sm">{addr}</span>
                            </label>
                        ))}
                    </div>

                    {/* Add Address Dialog Trigger */}
                    <Dialog>
                        <DialogTrigger asChild>
                            <Button variant="outline" className="mt-2 w-full">+ Add Delivery Address</Button>
                        </DialogTrigger>

                        <DialogContent className="max-w-xl w-full">
                            <DialogHeader>
                                <DialogTitle>Select & Add Delivery Address</DialogTitle>
                            </DialogHeader>

                            {/* You'll add map & search here later */}
                            <div className="mt-4">
                                <p className="text-sm text-gray-600">Map, address picker, and form fields go here.</p>
                            </div>
                        </DialogContent>
                    </Dialog>
                </div>

                {/* Additional Instructions */}
                <div className="space-y-2">
                    <Label htmlFor="instructions">Additional Instructions</Label>
                    <Textarea
                        id="instructions"
                        value={instructions}
                        onChange={(e) => setInstructions(e.target.value)}
                        placeholder="e.g., Leave near the door, call before delivery"
                        rows={3}
                        className='form-field'
                    />
                </div>

                {/* Confirm Button */}
                <Button className="w-full">Confirm</Button>
            </CardContent>
        </Card>
    );
};

export default DeliveryDetails;
