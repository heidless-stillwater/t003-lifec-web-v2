
'use client';

import { Palette, Sun, Moon, Check } from 'lucide-react';
import { useTheme } from '@/components/theme-provider';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuPortal,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
  DropdownMenuSeparator
} from '@/components/ui/dropdown-menu';
import { Switch } from '@/components/ui/switch';
import { appThemes } from '@/lib/themes';

export function ThemeSwitcher() {
  const { setTheme, setPalette, palette, theme } = useTheme();

  const primaryColorThemes = Object.entries(appThemes.primaryColorsThemes);
  const daisyUIThemes = Object.entries(appThemes.daisyUIThemes);
  const bespokeThemes = Object.entries(appThemes.bespokeThemes);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon">
          <Palette className="h-5 w-5" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <div className="flex items-center justify-between px-2 py-1.5">
            <div className="flex items-center gap-2">
                <Sun className="h-4 w-4" />
                <Switch
                    id="theme-mode-switch"
                    checked={theme === 'dark'}
                    onCheckedChange={(isDark) => setTheme(isDark ? 'dark' : 'light')}
                />
                <Moon className="h-4 w-4" />
            </div>
        </div>
        <DropdownMenuSeparator />
        <DropdownMenuSub>
          <DropdownMenuSubTrigger>
            <span>Primary Colors</span>
          </DropdownMenuSubTrigger>
          <DropdownMenuPortal>
            <DropdownMenuSubContent>
              {primaryColorThemes.map(([name, themeData]) => (
                <DropdownMenuItem
                  key={name}
                  onClick={() => setPalette(name as keyof typeof appThemes.primaryColorsThemes)}
                >
                  <div
                    className="w-4 h-4 rounded-full mr-2 border"
                    style={{ backgroundColor: themeData.swatchColor }}
                  ></div>
                  <span>{name}</span>
                  {palette === name && <Check className="ml-auto h-4 w-4" />}
                </DropdownMenuItem>
              ))}
            </DropdownMenuSubContent>
          </DropdownMenuPortal>
        </DropdownMenuSub>
        <DropdownMenuSub>
          <DropdownMenuSubTrigger>
            <span>DaisyUI Themes</span>
          </DropdownMenuSubTrigger>
          <DropdownMenuPortal>
            <DropdownMenuSubContent>
              {daisyUIThemes.map(([name, themeData]) => (
                <DropdownMenuItem
                  key={name}
                  onClick={() => setPalette(name as keyof typeof appThemes.daisyUIThemes)}
                >
                  <div
                    className="w-4 h-4 rounded-full mr-2 border"
                    style={{ backgroundColor: themeData.swatchColor }}
                  ></div>
                  <span>{name}</span>
                  {palette === name && <Check className="ml-auto h-4 w-4" />}
                </DropdownMenuItem>
              ))}
            </DropdownMenuSubContent>
          </DropdownMenuPortal>
        </DropdownMenuSub>
        <DropdownMenuSub>
          <DropdownMenuSubTrigger>
            <span>Bespoke</span>
          </DropdownMenuSubTrigger>
          <DropdownMenuPortal>
            <DropdownMenuSubContent>
              {bespokeThemes.map(([name, themeData]) => (
                <DropdownMenuItem
                  key={name}
                  onClick={() => setPalette(name as keyof typeof appThemes.bespokeThemes)}
                >
                  <div
                    className="w-4 h-4 rounded-full mr-2 border"
                    style={{ backgroundColor: themeData.swatchColor }}
                  ></div>
                  <span>{name}</span>
                  {palette === name && <Check className="ml-auto h-4 w-4" />}
                </DropdownMenuItem>
              ))}
            </DropdownMenuSubContent>
          </DropdownMenuPortal>
        </DropdownMenuSub>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

      