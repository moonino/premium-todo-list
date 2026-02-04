import { useState } from 'react';
import { Plus } from 'lucide-react';

export default function TodoInput({ onAdd }) {
    const [text, setText] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (text.trim()) {
            onAdd(text);
            setText('');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="mt-8 relative">
            <input
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Add a new goal..."
                className="w-full h-14 pl-6 pr-14 rounded-2xl bg-white/20 backdrop-blur-md border border-white/30 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/50 focus:bg-white/30 transition-all font-medium"
            />
            <button
                type="submit"
                className="absolute right-2 top-2 w-10 h-10 bg-white rounded-xl flex items-center justify-center text-purple-600 hover:bg-purple-50 transition-colors shadow-lg"
            >
                <Plus className="w-6 h-6" />
            </button>
        </form>
    );
}
