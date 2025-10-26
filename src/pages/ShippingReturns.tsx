import { PageTransition } from '@/components/PageTransition';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Package, RefreshCw, Truck, Clock } from 'lucide-react';

const ShippingReturns = () => {
  return (
    <PageTransition>
      <div className="min-h-screen bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-12">
            <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">
              Shipping & Returns
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Everything you need to know about our shipping and return policies
            </p>
          </div>

          <Tabs defaultValue="shipping" className="space-y-8">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="shipping">Shipping</TabsTrigger>
              <TabsTrigger value="returns">Returns</TabsTrigger>
            </TabsList>

            <TabsContent value="shipping" className="space-y-8">
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="bg-card border border-border rounded-lg p-6">
                  <div className="bg-accent rounded-full w-12 h-12 flex items-center justify-center mb-4">
                    <Truck className="h-6 w-6" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">Standard Shipping</h3>
                  <p className="text-muted-foreground text-sm">
                    Free on orders over $150. Delivery in 3-5 business days.
                  </p>
                </div>

                <div className="bg-card border border-border rounded-lg p-6">
                  <div className="bg-accent rounded-full w-12 h-12 flex items-center justify-center mb-4">
                    <Clock className="h-6 w-6" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">Express Shipping</h3>
                  <p className="text-muted-foreground text-sm">
                    $20 flat rate. Delivery in 1-2 business days.
                  </p>
                </div>
              </div>

              <div className="prose prose-neutral dark:prose-invert max-w-none">
                <h2 className="font-serif text-2xl font-semibold mb-4">Shipping Information</h2>
                
                <h3 className="font-semibold text-lg mt-6 mb-3">Domestic Shipping</h3>
                <p className="text-muted-foreground">
                  We offer free standard shipping on all domestic orders over $150. Orders under $150 have a flat shipping rate of $10. All orders are processed within 1-2 business days. You will receive a tracking number via email once your order ships.
                </p>

                <h3 className="font-semibold text-lg mt-6 mb-3">International Shipping</h3>
                <p className="text-muted-foreground">
                  We ship to over 100 countries worldwide. International shipping costs vary by location and are calculated at checkout. Delivery times range from 7-14 business days. Please note that international customers are responsible for any customs duties or import taxes.
                </p>

                <h3 className="font-semibold text-lg mt-6 mb-3">Order Processing</h3>
                <p className="text-muted-foreground">
                  Orders placed before 2 PM EST Monday-Friday will be processed the same day. Weekend orders will be processed on the next business day. During peak seasons, processing times may be slightly longer.
                </p>
              </div>
            </TabsContent>

            <TabsContent value="returns" className="space-y-8">
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="bg-card border border-border rounded-lg p-6">
                  <div className="bg-accent rounded-full w-12 h-12 flex items-center justify-center mb-4">
                    <RefreshCw className="h-6 w-6" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">30-Day Returns</h3>
                  <p className="text-muted-foreground text-sm">
                    Full refund on unworn items with original tags within 30 days.
                  </p>
                </div>

                <div className="bg-card border border-border rounded-lg p-6">
                  <div className="bg-accent rounded-full w-12 h-12 flex items-center justify-center mb-4">
                    <Package className="h-6 w-6" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">Free Returns</h3>
                  <p className="text-muted-foreground text-sm">
                    Free return shipping label included with every order.
                  </p>
                </div>
              </div>

              <div className="prose prose-neutral dark:prose-invert max-w-none">
                <h2 className="font-serif text-2xl font-semibold mb-4">Return Policy</h2>
                
                <h3 className="font-semibold text-lg mt-6 mb-3">Return Eligibility</h3>
                <p className="text-muted-foreground">
                  Items must be returned within 30 days of delivery in their original condition with all tags attached. Items must be unworn, unwashed, and free from any signs of wear. Sale items are final sale and cannot be returned.
                </p>

                <h3 className="font-semibold text-lg mt-6 mb-3">How to Return</h3>
                <ol className="text-muted-foreground space-y-2 ml-6">
                  <li>Log into your account and navigate to your order history</li>
                  <li>Select the items you wish to return and choose a return reason</li>
                  <li>Print the prepaid return shipping label</li>
                  <li>Pack the items securely in their original packaging</li>
                  <li>Drop off the package at any authorized shipping location</li>
                </ol>

                <h3 className="font-semibold text-lg mt-6 mb-3">Refund Processing</h3>
                <p className="text-muted-foreground">
                  Once we receive your return, please allow 5-7 business days for inspection and processing. Refunds will be issued to your original payment method. You will receive an email confirmation once your refund has been processed.
                </p>

                <h3 className="font-semibold text-lg mt-6 mb-3">Exchanges</h3>
                <p className="text-muted-foreground">
                  We currently do not offer direct exchanges. If you need a different size or color, please return your original item and place a new order.
                </p>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </PageTransition>
  );
};

export default ShippingReturns;
