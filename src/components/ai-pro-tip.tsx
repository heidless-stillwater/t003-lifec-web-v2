'use client';

import { useState } from 'react';
import { Lightbulb } from 'lucide-react';
import { getProTipAction } from '@/app/actions';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

type AIProTipProps = {
  context: string;
};

export function AIProTip({ context }: AIProTipProps) {
  const [tip, setTip] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleGetTip = async () => {
    setLoading(true);
    setError(null);
    setTip(null);
    const result = await getProTipAction({ context });
    if (result.success) {
      setTip(result.proTip);
    } else {
      setError(result.error ?? 'An unknown error occurred.');
    }
    setLoading(false);
  };

  return (
    <Card className="bg-card/80 backdrop-blur-sm shadow-lg">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 font-headline text-2xl">
          <Lightbulb className="h-6 w-6 text-primary" />
          AI-Powered Pro Tip
        </CardTitle>
        <CardDescription>
          Get an actionable tip from our AI coach to help you on your journey.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Button onClick={handleGetTip} disabled={loading} className="w-full sm:w-auto">
          {loading ? 'Generating...' : 'Get a Pro Tip'}
        </Button>
        
        {loading && (
            <div className="mt-4 flex items-center gap-2 text-muted-foreground">
                <div className="w-4 h-4 border-2 border-primary border-t-transparent rounded-full animate-spin"></div>
                <span>Thinking...</span>
            </div>
        )}

        {tip && (
            <Alert className="mt-4 border-primary/50 bg-primary/10">
              <Lightbulb className="h-4 w-4 !text-primary" />
              <AlertTitle className="font-headline !text-primary">Here's a tip for you:</AlertTitle>
              <AlertDescription className="!text-foreground">
                {tip}
              </AlertDescription>
            </Alert>
        )}
        {error && (
            <Alert variant="destructive" className="mt-4">
                <AlertTitle>Error</AlertTitle>
                <AlertDescription>
                    {error}
                </AlertDescription>
            </Alert>
        )}
      </CardContent>
    </Card>
  );
}
