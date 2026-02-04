import { useState, useEffect } from 'react';
import { Sparkles, Calendar } from 'lucide-react';
import TodoInput from './components/TodoInput';
import TodoItem from './components/TodoItem';

function App() {
  const [todos, setTodos] = useState(() => {
    const saved = localStorage.getItem('premium-todos');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem('premium-todos', JSON.stringify(todos));
  }, [todos]);

  const addTodo = (text) => {
    setTodos([{ id: Date.now(), text, completed: false }, ...todos]);
  };

  const toggleTodo = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const activeTodos = todos.filter(t => !t.completed).length;

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 flex items-center justify-center p-4 font-sans">
      <div className="w-full max-w-lg">
        {/* Glassmorphism Card */}
        <div className="bg-white/10 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/20 overflow-hidden relative">

          {/* Decorative gradients */}
          <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-yellow-300 via-pink-400 to-indigo-400" />

          {/* Header */}
          <div className="p-8 pb-4">
            <h1 className="text-4xl font-bold text-white mb-2 flex items-center gap-3 tracking-tight">
              <Sparkles className="w-9 h-9 text-yellow-300 fill-yellow-300/20" />
              My Focus
            </h1>
            <div className="flex justify-between items-end">
              <p className="text-white/60 text-lg font-medium flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                {new Date().toLocaleDateString('ko-KR', { month: 'long', day: 'numeric', weekday: 'long' })}
              </p>
              <div className="text-white/80 text-sm font-medium bg-white/10 px-3 py-1 rounded-full border border-white/10">
                {activeTodos} tasks remaining
              </div>
            </div>
          </div>

          {/* Todo List Area */}
          <div className="p-8 pt-2">
            <div className="space-y-3 max-h-[50vh] overflow-y-auto pr-2 custom-scrollbar">
              {todos.length === 0 ? (
                <div className="text-white/40 text-center py-12 italic flex flex-col items-center gap-2">
                  <span className="text-4xl">✨</span>
                  <p>할 일이 아직 없습니다. <br />오늘의 목표를 추가해보세요!</p>
                </div>
              ) : (
                todos.map(todo => (
                  <TodoItem
                    key={todo.id}
                    todo={todo}
                    onToggle={toggleTodo}
                    onDelete={deleteTodo}
                  />
                ))
              )}
            </div>

            {/* Input */}
            <TodoInput onAdd={addTodo} />
          </div>

        </div>

        {/* Footer Credit */}
        <p className="text-center text-white/30 mt-6 text-sm font-medium">
          DREAM • PLAN • ACHIEVE
        </p>
      </div>
    </div>
  );
}

export default App;
