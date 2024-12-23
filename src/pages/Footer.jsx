import React from 'react';
import '/src/pages/footer.css';

function TrivolioFooter() {
  return (
    <footer classname="fixed bottom-0 left-0 z-20 w-full p-4 bg-white rounded-lg shadow dark:bg-gray-900 m-4" id="main">
        <div classname="mx-auto w-full max-w-screen-xl p-4 md:py-8">
            <div classname="sm:flex sm:items-center sm:justify-between">
            <a href="#" classname="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                <img src="https://flowbite.com/docs/images/logo.svg" classname="h-8" alt="trivolio" />
                <span classname="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Trivolio</span>
            </a>
            <ul classname="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                <li>
                <a href="#" classname="hover:underline me-4 md:me-6">About</a>
                </li>
                <li>
                <a href="#" classname="hover:underline me-4 md:me-6">Privacy Policy</a>
                </li>
                <li>
                <a href="#" classname="hover:underline me-4 md:me-6">Licensing</a>
                </li>
                <li>
                <a href="#" classname="hover:underline">Contact</a>
                </li>
            </ul>
            </div>
            <hr classname="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
            <span classname="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024 <a href="https://flowbite.com/" classname="hover:underline">Trivolio™</a>. All Rights Reserved.</span>
        </div>
    </footer>
  );
}

export default TrivolioFooter;