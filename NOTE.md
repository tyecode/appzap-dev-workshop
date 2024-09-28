# AppZap Dev Workshop

#### API Endpoint

```text
API_ENDPOINT=https://api.appzap.la:17070
```

#### global.css

```css
@import url("https://fonts.googleapis.com/css2?family=Fugaz+One&display=swap");

@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
    --background: 0 0% 100%;
    --foreground: 14 21% 38%;
    --card: 0 0% 100%;
    --card-foreground: 14 21% 38%;
    --popover: 0 0% 100%;
    --popover-foreground: 14 21% 38%;
    --primary: 16 96% 61%;
    --primary-foreground: 0 0% 100%;
    --secondary: 33 100% 63%;
    --secondary-foreground: 0 0% 100%;
    --muted: 7 15% 88%;
    --muted-foreground: 0deg 0% 62%;
    --accent: 16 96% 92%;
    --accent-foreground: 33 100% 63%;
    --destructive: 0 84.2% 60.2%;
    --destructive-foreground: 210 40% 98%;
    --border: 16 96% 61%;
    --input: 214.3 31.8% 91.4%;
    --ring: 16 96% 61%;
    --radius: 0.5rem;
    --chart-1: 12 76% 61%;
    --chart-2: 173 58% 39%;
    --chart-3: 197 37% 24%;
    --chart-4: 43 74% 66%;
    --chart-5: 27 87% 67%;
  }

  .dark {
    --background: 0 0% 100%;
    --foreground: 14 21% 38%;
    --card: 0 0% 100%;
    --card-foreground: 14 21% 38%;
    --popover: 0 0% 100%;
    --popover-foreground: 14 21% 38%;
    --primary: 16 96% 61%;
    --primary-foreground: 0 0% 100%;
    --secondary: 33 100% 63%;
    --secondary-foreground: 0 0% 100%;
    --muted: 7 15% 88%;
    --muted-foreground: 0deg 0% 62%;
    --accent: 16 96% 92%;
    --accent-foreground: 33 100% 63%;
    --destructive: 0 84.2% 60.2%;
    --destructive-foreground: 210 40% 98%;
    --border: 16 96% 61%;
    --input: 214.3 31.8% 91.4%;
    --ring: 16 96% 61%;
    --radius: 0.5rem;
    --chart-1: 12 76% 61%;
    --chart-2: 173 58% 39%;
    --chart-3: 197 37% 24%;
    --chart-4: 43 74% 66%;
    --chart-5: 27 87% 67%;
  }
}

@layer base {
  * {
    @apply border-border;
  }
  body {
    @apply bg-background text-foreground;
  }
}

@layer components {
  .flex-center {
    @apply flex items-center justify-center;
  }

  .flex-between {
    @apply flex items-center justify-between;
  }
}

```

