
# 📝 DragTodo

A modern **Drag & Drop To-Do List App** built with **React + Vite**.  
Easily add, delete, check, and reorder tasks with a smooth drag-and-drop interface.

---

## 🚀 Features
- ✅ Add new tasks  
- 🗑️ Delete tasks  
- ✔️ Mark tasks as complete (checkbox)  
- ↕️ Drag and drop to reorder tasks  
- 🎨 Responsive design (works on mobile & desktop)  

---

## 🛠️ Tech Stack
- **React.js (Vite)**
- **@dnd-kit/core** (for drag & drop)
- **CSS3 / Media Queries**

---

## 📸 Screenshots
[App Preview]  <img width="1784" height="916" alt="Screenshot 2025-08-28 210932" src="https://github.com/user-attachments/assets/8332327f-6f85-4e8d-8c6a-2268f45b1d2f" />
---
## 📂 Project Structure
```
DragTodo/
├── public/ # Static assets
│ └── vite.svg
├── src/ # Main source code
│ ├── components/ # Reusable UI components
│ │ ├── Coloum.jsx # Column component (renders tasks)
│ │ ├── Task.jsx # Individual task (checkbox, delete, drag)
│ │ └── Input.jsx # Input field for adding new tasks
│ ├── App.jsx # Root component (manages state & drag-drop logic)
│ ├── App.css # Main styles
│ └── main.jsx # React DOM render entry point
├── .gitignore # Ignored files
├── index.html # Main HTML file
├── package.json # Dependencies & scripts
├── README.md # Project documentation
└── vite.config.js # Vite configuration
```

## ⚡ Installation

1. Clone the repository
   ```bash
   git clone https://github.com/rohitsingh83/DragTodo.git
   cd DragTodo
````

2. Install dependencies

   ```bash
   npm install
   ```

3. Start the development server

   ```bash
   npm run dev
   ```

4. Build for production

   ```bash
   npm run build
   ```

## 🌐 Live Demo

👉 [DragTodo on GitHub Pages](https://drag-todo-six.vercel.app/)
*(After you deploy, update this link)*



**👨‍💻 Author**

Developed with ❤️ by **Rohit Singh**
