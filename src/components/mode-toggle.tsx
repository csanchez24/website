import { useTheme } from "@/components/theme-provider";
import { Label } from "./ui/label";
import { Switch } from "./ui/switch";

export function ModeToggle() {
  const { setTheme, theme } = useTheme();

  return (
    <div className="flex items-center space-x-2">
      <Switch
        checked={theme === "dark"}
        onCheckedChange={(checked) => setTheme(checked ? "dark" : "light")}
      />
      <Label htmlFor="Dark Mode">Dark Mode</Label>
    </div>
  );
}
