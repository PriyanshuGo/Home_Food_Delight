"use client"
import React from 'react'
import { Plus, Minus, Trash2 } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';


function CartItems() {
    return (
        <div>
            <Card>
                <CardHeader>
                    <CardTitle className="text-lg">Cart Items</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                    {/* Replace with cartItems.map in future */}
                    <div className="flex items-center justify-between p-3 bg-warm-beige/30 rounded-lg">
                        <div className="flex-1">
                            <h4 className="font-medium text-brown">Sample Dish</h4>
                            <p className="text-sm text-muted-foreground">₹120 each</p>
                        </div>
                        <div className="flex items-center space-x-3">
                            <div className="flex items-center space-x-2">
                                <Button size="sm" variant="outline" className="w-8 h-8 p-0">
                                    <Minus className="h-3 w-3" />
                                </Button>
                                <span className="w-8 text-center font-medium">2</span>
                                <Button size="sm" variant="outline" className="w-8 h-8 p-0">
                                    <Plus className="h-3 w-3" />
                                </Button>
                            </div>
                            <div className="text-right min-w-[60px]">
                                <p className="font-semibold text-saffron">₹240</p>
                            </div>
                            <Button size="sm" variant="destructive" className="w-8 h-8 p-0">
                                <Trash2 className="h-3 w-3" />
                            </Button>
                        </div>
                    </div>

                    <Separator />
                    <div className="flex justify-between items-center text-lg font-semibold">
                        <span className="text-brown">Total:</span>
                        <span className="text-saffron">₹240</span>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}

export default CartItems
