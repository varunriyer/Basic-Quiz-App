# Simple Quiz App

A simple and interactive quiz application built using **HTML**, **CSS**, and **JavaScript**. This project serves as a foundational exercise to understand DOM manipulation, event handling, and dynamic content rendering in web development.

## 📝 Description

The Basic Quiz App presents users with a series of multiple-choice questions. Users can select their answers, navigate through the quiz, and receive their final score upon completion. The application is designed to be lightweight and easily extendable, making it perfect for beginners and those looking to enhance their JavaScript skills.

## 🚀 Features

- **Multiple Questions**: Presents a set of predefined multiple-choice questions.
- **Dynamic Rendering**: Questions and answer options are dynamically generated using JavaScript.
- **Interactive UI**: Users can select answers and navigate through questions seamlessly.
- **Score Tracking**: Calculates and displays the user's score at the end of the quiz.
- **Responsive Design**: Ensures compatibility across various devices and screen sizes.

## 📂 Project Structure

```
Simple-Quiz-App/
├── index.html        # Main HTML file
├── styles.css        # Styling for the application
└── script.js         # JavaScript logic for quiz functionality
```

## 💻 Getting Started

To run the application locally, follow these steps:

1. **Clone the Repository**

   Open your terminal and execute:

   ```bash
   git clone https://github.com/varunriyer/Simple-Quiz-App.git
   ```

2. **Navigate to the Project Directory**

   ```bash
   cd Simple-Quiz-App
   ```

3. **Open the Application**

   Open the `index.html` file in your preferred web browser. You can do this by double-clicking the file or using the following command:

   ```bash
   open index.html
   ```

   *Note: The `open` command works on macOS. For Windows, you can use `start index.html`, and for Linux, use `xdg-open index.html`.*

## 🛠️ Customization

To customize the quiz questions:

1. Open the `script.js` file.
2. Locate the `questions` array.
3. Modify the existing questions or add new ones following the same structure:

   ```javascript
   const questions = [
     {
       question: "Your question here?",
       answers: [
         { text: "Option 1", correct: false },
         { text: "Option 2", correct: true },
         { text: "Option 3", correct: false },
         { text: "Option 4", correct: false }
       ]
     },
     // Add more questions as needed
   ];
   ```

Ensure that each question has one correct answer marked with `correct: true`.

## 📸 Screenshots

![image](https://github.com/user-attachments/assets/953e3959-b5c3-40ed-8211-30ac4572a766)

![image](https://github.com/user-attachments/assets/cbbfdba2-f8af-4343-b064-b5fda46f80a8)

![image](https://github.com/user-attachments/assets/bc368bca-57de-40c8-af7c-529c2aee34b5)



## 🤝 Contributing

Contributions are welcome! If you have suggestions for improvements or new features, feel free to fork the repository and submit a pull request.

1. Fork the repository.
2. Create a new branch:

   ```bash
   git checkout -b feature/YourFeature
   ```

3. Commit your changes:

   ```bash
   git commit -m "Add your feature"
   ```

4. Push to the branch:

   ```bash
   git push origin feature/YourFeature
   ```

5. Open a pull request.

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).
