"use client";

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Eye, EyeOff } from 'lucide-react';

export default function TextCustomizer() {
    const [fontSize, setFontSize] = useState(48);
    const [fontColor, setFontColor] = useState('#18181b'); // A dark gray
    const [bgColor, setBgColor] = useState('#e4e4e7'); // A light gray
    const [isVisible, setIsVisible] = useState(true);

    return (
        <Card className="w-full shadow-xl border-t-4 border-primary overflow-hidden">
            <CardHeader className="text-center bg-card/50">
                <CardTitle className="text-2xl font-bold">Text Customizer</CardTitle>
                <CardDescription>Adjust the properties of the text display.</CardDescription>
            </CardHeader>
            <CardContent className="p-4 md:p-8">
                <div className="grid md:grid-cols-5 gap-8 items-start">
                    {/* Controls Column */}
                    <div className="md:col-span-2 space-y-8">
                        <div className="space-y-3">
                            <Label htmlFor="font-size" className="flex justify-between items-center text-base">
                                <span>Font Size</span>
                                <span className="font-bold text-primary">{fontSize}px</span>
                            </Label>
                            <Slider
                                id="font-size"
                                min={12}
                                max={128}
                                step={1}
                                value={[fontSize]}
                                onValueChange={(value) => setFontSize(value[0])}
                                aria-label="Font size slider"
                            />
                        </div>
                        
                        <div className="grid grid-cols-2 gap-6">
                            <div className="flex flex-col gap-3 text-center">
                                <Label htmlFor="font-color" className="text-base">Font Color</Label>
                                <Input
                                    id="font-color"
                                    type="color"
                                    value={fontColor}
                                    onChange={(e) => setFontColor(e.target.value)}
                                    className="w-full h-12 p-1 cursor-pointer"
                                    aria-label="Font color picker"
                                />
                            </div>
                            <div className="flex flex-col gap-3 text-center">
                                <Label htmlFor="bg-color" className="text-base">Background</Label>
                                <Input
                                    id="bg-color"
                                    type="color"
                                    value={bgColor}
                                    onChange={(e) => setBgColor(e.target.value)}
                                    className="w-full h-12 p-1 cursor-pointer"
                                    aria-label="Background color picker"
                                />
                            </div>
                        </div>
                        
                        <Button onClick={() => setIsVisible(!isVisible)} className="w-full text-base py-6 bg-accent text-accent-foreground hover:bg-accent/90 focus-visible:ring-ring">
                            {isVisible ? <EyeOff className="mr-2 h-5 w-5" /> : <Eye className="mr-2 h-5 w-5" />}
                            {isVisible ? 'Hide Text' : 'Show Text'}
                        </Button>
                    </div>
                    
                    {/* Display Area Column */}
                    <div
                        className="md:col-span-3 flex items-center justify-center rounded-lg p-6 transition-colors duration-300 min-h-[300px] shadow-inner"
                        style={{ backgroundColor: bgColor }}
                    >
                        {isVisible ? (
                            <p
                                className="text-center break-words transition-all duration-300"
                                style={{
                                    fontSize: `${fontSize}px`,
                                    color: fontColor,
                                    lineHeight: 1.3,
                                }}
                            >
                                cs-app base text
                            </p>
                        ) : (
                             <div className="text-muted-foreground flex flex-col items-center gap-2">
                                <EyeOff size={48} />
                                <span className="font-semibold">Text is hidden</span>
                            </div>
                        )}
                    </div>
                </div>
            </CardContent>
        </Card>
    );
}
