import { useEffect } from 'react';

const BlogsPage = () => {
  useEffect(() => {
    document.title = 'Blogs - Phudu Medical';
  }, []);

  return (
    <div className="container mx-auto px-4 py-8 bg-gray-400">
      <h1 className="text-4xl font-bold text-white mb-6">React Concepts Blog</h1>

      <div className="space-y-8">
        {/* querscin 1 */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-3">1.What is useState and how does it work in React?</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Adds state to functional components.</li>
            <li>Returns [state, setState].</li>
            <li>Triggers re-render on state change.</li>
            <li>Remembers state across renders.</li>
          </ul>
        </div>

        {/* Querscin 2 */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-3">2.What is the purpose of useEffect in React?</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Handles side effects in components.</li>
            <li>Used for: data fetching, subscriptions, DOM changes, cleanup.</li>
            <li>Runs after render, can return cleanup function.</li>
          </ul>
        </div>

        {/* querscin 3 */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-3">3.What is a custom hook in React and when should you use one?</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Reusable function starting with "use".</li>
            <li>Encapsulates hook logic.</li>
            <li>Use when logic is shared or complex.</li>
            <li>Helps with clean code and testing.</li>
          </ul>
        </div>

        {/* quercin 4 */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-3">4.Difference between controlled and uncontrolled components? Which one is better?</h2>

          <h3 className="text-xl font-semibold text-gray-800 mb-2">Controlled Components:</h3>
          <ul className="list-disc list-inside text-gray-700 space-y-1 mb-4">
            <li>State via React and setState.</li>
            <li>More control, ideal for validation.</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-800 mb-2">Uncontrolled Components:</h3>
          <ul className="list-disc list-inside text-gray-700 space-y-1 mb-4">
            <li>State via DOM refs.</li>
            <li>Less control, less code.</li>
          </ul>

          <p className="text-gray-700"><strong>Better:</strong> Controlled for flexibility, uncontrolled for simplicity.</p>
        </div>

        {/* querscin 5 */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-3">5.Tell us something about useFormStatus()</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
            <li>React 19 hook for Server Actions.</li>
            <li>Tracks form submission status.</li>
            <li>Supports loading states, optimistic UI.</li>
            <li>Used in form’s child component.</li>
            <li>Only in react-dom package.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default BlogsPage;
