import type { Task } from "../../types/task";

export function Task({ title, isDone }: Task) {
    return (
        <div className="rounded-2xl border-2 border-deep-teal bg-mint p-2 m-4 shadow-lg w-48">
            <h3 className="font-bold text-ink">{title}</h3>
            <p className="text-sm text-deep-teal">Some description</p>
            <input type="checkbox" checked={isDone} readOnly/>
        </div>
    );
}