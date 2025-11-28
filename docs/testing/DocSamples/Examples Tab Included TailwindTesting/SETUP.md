# Setting Up Tailwind CSS v4

Follow these steps to set up Tailwind CSS v4 in your project:

## 1. Install Tailwind CSS
Run the following command to install Tailwind CSS, the CLI, PostCSS and Autoprefixer as dev dependencies:
```bash
npm install -D tailwindcss @tailwindcss/cli postcss autoprefixer
```

**Note:** Tailwind CSS v4 requires the separate `@tailwindcss/cli` package to run the build commands.

## 2. Create Your CSS File
Tailwind CSS v4 uses a simpler approach. Create a CSS file (e.g., `src/input.css`) and add the following:
```css
@import "tailwindcss";
```

That's it! No config file needed for basic setup. Tailwind v4 automatically detects your HTML files.

## 3. Create Your HTML File
Create an HTML file (e.g., `src/index.html`) that uses Tailwind utility classes:
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tailwind CSS v4 Demo</title>
    <link rel="stylesheet" href="../dist/output.css">
</head>
<body>
    <div class="flex items-center justify-center min-h-screen bg-gray-100">
        <h1 class="text-4xl font-bold text-blue-600">
            Hello, Tailwind CSS v4!
        </h1>
    </div>
</body>
</html>
```

## 4. Build Your CSS
Run the Tailwind CLI tool to process your CSS:
```bash
npx @tailwindcss/cli -i ./src/input.css -o ./dist/output.css --watch
```

This will compile your CSS and watch for changes.

## 5. Add Build Scripts (Optional)
Add these scripts to your `package.json` for convenience:
```json
"scripts": {
  "dev": "@tailwindcss/cli -i ./src/input.css -o ./dist/output.css --watch",
  "build": "@tailwindcss/cli -i ./src/input.css -o ./dist/output.css --minify"
}
```

Then you can run:
- `npm run dev` - Start development with watch mode
- `npm run build` - Build optimized CSS for production

## 6. Open in Browser
There are several ways to view your HTML file:

**Option 1: Direct File Open**
```bash
start src\index.html
```
This will open the file in your default web browser.

**Option 2: Using a Development Server (Recommended)**
Install and run a simple HTTP server:
```bash
npm install -g http-server
http-server -o
```
This will start a local server and automatically open your browser to `http://localhost:8080`.

**Option 3: VS Code Live Server**
- Right-click on `src/index.html` in VS Code
- Select "Open with Live Server" (requires Live Server extension)

## 7. Start Using Tailwind CSS
Open your HTML file in a browser and start using Tailwind's utility classes!

## What's Different in v4?
- **No config file needed** - Tailwind v4 works out of the box
- **Simpler CSS import** - Just `@import "tailwindcss"` instead of three directives
- **Automatic content detection** - No need to configure content paths
- **Faster builds** - v4 is significantly faster than v3