import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';

function DeliveryDetails() {
    return (
        <div>
            <Card>
                <CardHeader>
                    <CardTitle className="text-lg">Delivery Details</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <Label htmlFor="name">Full Name *</Label>
                            <Input id="name" placeholder="Enter your full name" />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="phone">Phone Number *</Label>
                            <Input id="phone" placeholder="Enter your phone number" />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="address">Delivery Address *</Label>
                        <Textarea id="address" placeholder="Enter your complete delivery address" rows={3} />
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="instructions">Special Instructions</Label>
                        <Textarea
                            id="instructions"
                            placeholder="Any special dietary requirements or delivery instructions"
                            rows={2}
                        />
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}

export default DeliveryDetails
