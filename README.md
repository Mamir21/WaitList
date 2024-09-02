# Waitlist Timer

Waitlist Timer is a customizable application built with Next.js that allows users to set a countdown timer for a waitlist. It includes interactive animations, dynamic themes, and a modern, responsive design to enhance the user experience.

## Demo

![image](https://github.com/user-attachments/assets/6226dc6b-77da-49f9-94e0-2c127f7554d9)

## Features

- **Customizable Waitlist Timer**: Easily set and adjust the waitlist timer to any end time.
- **Animations**: Custom button animations powered by Framer Motion.js for smooth interactions.
- **Waitlist Functionality**: Integrated with Clerk for seamless waitlist management.
- **Background Effects**: Custom snowfall background for a visually appealing atmosphere.
- **Dark and Light Mode**: Toggle between dark and light themes to match user preferences.
- **Responsive Design**: Fully responsive layout that adapts to various screen sizes.
- **Gradient Colors**: Beautiful gradient color schemes for a modern aesthetic.

## Tech Stack

- **Frontend**: Next.js, JavaScript, Tailwind / CSS, Framer Motion.js
- **Waitlist Management**: Clerk
- **Styling**: Custom CSS, Tailwind CSS, Gradient Colors
- **Animations**: Framer Motion.js

## Installation

To set up the Waitlist Timer locally, follow these steps:

1. Clone the repository:
    ```bash
    git clone https://github.com/Mamir21/your-repo.git
    ```

2. Navigate to the project directory:
    ```bash
    cd WaitList
    ```

3. Install dependencies:
    ```bash
    npm install
    ```

4. Set up your Clerk account:
   - Create a new Clerk project on the [Clerk Console](https://clerk.dev/).
   - Add your Clerk configuration to a `.env.local` file in the root directory of your project.

5. Run the development server:
    ```bash
    npm run dev
    ```

6. Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## Project Structure

- **`/components`**: Contains reusable React components like buttons, modals, and theme togglers.
- **`/pages`**: Main application pages and routing.
- **`/styles`**: Contains all CSS files including gradient color schemes and responsive styles.
- **`/public/images`**: Static images used in the application.

## Acknowledgements

- **Framer Motion.js** for animation handling.
- **Clerk** for providing waitlist and authentication functionality.
- **Next.js** for the frontend framework.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
