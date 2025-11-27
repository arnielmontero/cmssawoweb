1. Install Tailwind CSS
If you're using a build tool like PostCSS, install Tailwind CSS via npm:

npm install tailwindcss postcss autoprefixer
npx tailwindcss init

This creates a tailwind.config.js file for customization.

2. Add Tailwind to Your CSS
Create a CSS file (e.g., styles.css) and include the Tailwind directives:

@tailwind base;
@tailwind components;
@tailwind utilities;

3. Link Tailwind CSS in Your HTML
If you're not using a build tool, you can use the Tailwind CDN for quick setup. Add this to your <head> in index.html:

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <!-- Tailwind CSS CDN -->
    <script src="https://cdn.tailwindcss.com"></script>
    <script src="index.js"></script>
</head>

4. Use Tailwind Classes in HTML
You can now use Tailwind's utility classes directly in your HTML. For example:

<body class="bg-gray-100 text-center">
    <div class="max-w-md mx-auto mt-10 p-5 bg-white shadow-lg rounded-lg">
        <h1 class="text-2xl font-bold text-gray-800">Welcome to Tailwind CSS</h1>
        <p class="mt-2 text-gray-600">This is a simple Tailwind template.</p>
        <button class="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
            Click Me
        </button>
    </div>
</body>

5. Dynamically Add Tailwind Classes in JavaScript
You can manipulate Tailwind classes dynamically using JavaScript. For example:

document.addEventListener("DOMContentLoaded", () => {
    const button = document.createElement("button");
    button.textContent = "Dynamic Button";
    button.className = "px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600";
    document.body.appendChild(button);
});