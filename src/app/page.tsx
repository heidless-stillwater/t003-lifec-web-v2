import TextCustomizer from '@/components/TextCustomizer';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4 sm:p-8 bg-background">
      <div className="w-full max-w-5xl space-y-8">
        <header className="text-center">
          <h1 className="text-4xl sm:text-5xl font-headline font-extrabold tracking-tight text-primary">
            BaseText
          </h1>
          <p className="mt-3 text-lg text-muted-foreground max-w-2xl mx-auto">
            A simple application to demonstrate dynamic text styling. Use the controls below to customize the text display.
          </p>
        </header>
        <TextCustomizer />
      </div>
    </main>
  );
}
