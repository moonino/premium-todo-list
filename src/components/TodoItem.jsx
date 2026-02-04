import { Trash2, Check } from 'lucide-react';

export default function TodoItem({ todo, onToggle, onDelete }) {
    return (
        <div className="group flex items-center gap-3 p-4 bg-white/5 hover:bg-white/10 rounded-2xl transition-all border border-white/5 hover:border-white/20 shadow-sm backdrop-blur-sm">
            <button
                onClick={() => onToggle(todo.id)}
                className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all ${todo.completed
                        ? 'bg-gradient-to-br from-green-400 to-emerald-500 border-transparent'
                        : 'border-white/40 hover:border-white'
                    }`}
            >
                {todo.completed && <Check className="w-3.5 h-3.5 text-white stroke-[3]" />}
            </button>

            <span
                className={`flex-1 text-lg font-medium transition-colors ${todo.completed ? 'text-white/30 line-through' : 'text-white'
                    }`}
            >
                {todo.text}
            </span>

            <button
                onClick={() => onDelete(todo.id)}
                className="opacity-0 group-hover:opacity-100 p-2 text-white/40 hover:text-red-400 hover:bg-red-500/10 rounded-lg transition-all"
            >
                <Trash2 className="w-5 h-5" />
            </button>
        </div>
    );
}
