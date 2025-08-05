import React from 'react'
import { MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
function OrderViaWhatsapp() {
    return (
        <div className="space-y-3">
            <Button className="w-full bg-saffron hover:bg-saffron-dark text-white py-3">
                <MessageCircle className="h-5 w-5 mr-2" /> Generate WhatsApp Message
            </Button>

            <div className="flex gap-2">
                <Button variant="outline" className="flex-1">Continue Shopping</Button>
                <Button variant="destructive" className="flex-1">Clear Cart</Button>
            </div>
        </div>
    )
}

export default OrderViaWhatsapp
