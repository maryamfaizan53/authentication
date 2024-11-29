'use client';

import { useState } from 'react';
import { FaUser, FaLock, FaSignInAlt } from 'react-icons/fa';
import { signIn, signOut, useSession } from 'next-auth/react';

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { data: session } = useSession();
    const [loading, setLoading] = useState(false);

    const handleSignIn = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        await signIn('credentials', { redirect: false, email, password });
        setLoading(false);
    };

    const handleGitHubSignIn = async () => {
        setLoading(true);
        await signIn('github');
        setLoading(false);
    };

    const handleGoogleSignIn = async () => {
        setLoading(true);
        await signIn('google');
        setLoading(false);
    };

    const handleSignOut = async () => {
        setLoading(true);
        await signOut();
        setLoading(false);
    };

    return (
        <div className="bg-gray-900 min-h-screen text-white flex flex-col">
            {/* Header */}
            <header className="bg-gray-800 py-4 shadow-md">
                <nav className="max-w-7xl mx-auto px-4 flex justify-between items-center">
                    <a href="#" className="text-2xl font-bold text-purple-400 hover:text-purple-500 transition">
                        My Website
                    </a>
                    <ul className="flex space-x-6">
                        <li><a href="#" className="hover:text-purple-400 transition">Home</a></li>
                        <li><a href="#" className="hover:text-purple-400 transition">About</a></li>
                        <li><a href="#" className="hover:text-purple-400 transition">Contact</a></li>
                    </ul>
                </nav>
            </header>

            {/* Main Content */}
            <main className="flex-1 flex items-center justify-center px-4 py-4">
                <div className="bg-gray-800 shadow-lg rounded-lg p-8 max-w-md w-full">
                    <h1 className="text-3xl font-bold text-center text-purple-400 mb-6">
                        {session ? 'Welcome back!' : 'Sign In'}
                    </h1>
                    {session ? (
                        <div className="text-center">
                            <p className="text-purple-400 mb-4">You are signed in as {session.user?.email}</p>
                            <button
                                onClick={handleSignOut}
                                disabled={loading}
                                className="w-full bg-red-500 hover:bg-red-700 transition text-white font-bold py-2 px-4 rounded-lg">
                                {loading ? 'Signing Out...' : 'Sign Out'}
                            </button>
                        </div>
                    ) : (
                        <form onSubmit={handleSignIn} className="space-y-6">
                            {/* Email */}
                            <div>
                                <label className="block text-sm mb-2" htmlFor="email">Email</label>
                                <div className="flex items-center bg-gray-700 px-4 py-2 rounded-lg">
                                    <FaUser />
                                    <input
                                        type="email"
                                        id="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        className="bg-transparent w-full focus:outline-none text-white rounded-md mx-2 pl-2"
                                        placeholder="Enter your email"
                                        required
                                    />
                                </div>
                            </div>

                            {/* Password */}
                            <div>
                                <label className="block text-sm mb-2" htmlFor="password">Password</label>
                                <div className="flex items-center bg-gray-700 px-4 py-2 rounded-lg">
                                    <FaLock />
                                    <input
                                        type="password"
                                        id="password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        className="bg-transparent w-full focus:outline-none text-white rounded-md mx-2 pl-2"
                                        placeholder="Enter your password"
                                        required
                                    />
                                </div>
                            </div>

                            {/* Submit Button */}
                            <button
                                type="submit"
                                disabled={loading}
                                className="w-full bg-purple-500 hover:bg-purple-700 transition text-white font-bold py-2 px-4 rounded-lg flex items-center justify-center">
                                <FaSignInAlt />
                                <p className="mx-2">{loading ? 'Signing In...' : 'Sign In'}</p>
                            </button>
                        </form>
                    )}

                    {/* Social Sign-Ins */}
                    {!session && (
                        <>
                            <button
                                type="button"
                                onClick={handleGitHubSignIn}
                                disabled={loading}
                                className="w-full bg-emerald-400 hover:bg-emerald-600 transition text-white font-bold py-2 px-4 rounded-lg flex items-center justify-center mt-4">
                                <FaSignInAlt />
                                <p className="mx-2">{loading ? 'Loading...' : 'Sign In with GitHub'}</p>
                            </button>
                            <button
                                type="button"
                                onClick={handleGoogleSignIn}
                                disabled={loading}
                                className="w-full bg-blue-500 hover:bg-blue-700 transition text-white font-bold py-2 px-4 rounded-lg flex items-center justify-center p-2 mt-4">
                                <FaSignInAlt />
                                <p className="mx-2">{loading ? 'Loading...' : 'Sign In with Google'}</p>
                            </button>
                        </>
                    )}
                    <p className="text-sm text-gray-400 text-center mt-6">
                        Don&apos;t have an account? <a href="#" className="text-purple-400 hover:underline">Sign Up</a>
                    </p>
                </div>
            </main>

            {/* Footer */}
            <footer className="bg-gray-800 py-4 mt-auto">
                <div className="max-w-7xl mx-auto px-4 text-center text-gray-400 text-sm">
                    © 2024 My Website. All rights reserved.
                </div>
            </footer>
        </div>
    );
}




// 'use client';

// import { useState } from 'react';
// import { FaUser, FaLock, FaSignInAlt } from 'react-icons/fa';
// import { signIn, signOut, useSession } from 'next-auth/react';
//  import {Auth} from 'next/auth' // Use NextAuth hooks for authentication

// export default function Login() {
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const { data: session } = useSession(); // Session hook to manage user session

//     const handleSignIn = async (e: React.FormEvent) => {
//         e.preventDefault();
//         console.log('Sign-in attempt:', { email, password });
//         // Add custom sign-in logic here if necessary (e.g., calling an API)
//     };

//     const handleGitHubSignIn = () => {
//         signIn('github'); // Trigger GitHub sign-in with NextAuth
//     };

//     const handleGoogleSignIn = () => {
//         signIn('google'); // Trigger Google sign-in with NextAuth
//     };

//     const handleSignOut = () => {
//         signOut(); // Sign out using NextAuth
//     };

//     return (
//         <div className="bg-gray-900 min-h-screen text-white flex flex-col">
//             <header className="bg-gray-800 py-4 shadow-md">
//                 <nav className="max-w-7xl mx-auto px-4 flex justify-between items-center">
//                     <a href="#" className="text-2xl font-bold text-purple-400 hover:text-purple-500 transition">
//                         My VebSite
//                     </a>
//                     <ul className="flex space-x-6">
//                         <li><a href="#" className="hover:text-purple-400 transition">Home</a></li>
//                         <li><a href="#" className="hover:text-purple-400 transition">About</a></li>
//                         <li><a href="#" className="hover:text-purple-400 transition">Contact</a></li>
//                     </ul>
//                 </nav>
//             </header>

//             <main className="flex-1 flex items-center justify-center px-4 py-4">
//                 <div className="bg-gray-800 shadow-lg rounded-lg p-8 max-w-md w-full">
//                     <h1 className="text-3xl font-bold text-center text-purple-400 mb-6">
//                         {session ? 'Welcome back!' : 'Sign In'}
//                     </h1>
//                     {session ? (
//                         <div className="text-center">
//                             <p className="text-purple-400 mb-4">You are signed in as {session.user?.email}</p>
//                             <button
//                                 onClick={handleSignOut}
//                                 className="w-full bg-red-500 hover:bg-red-700 transition text-white font-bold py-2 px-4 rounded-lg">
//                                 Sign Out
//                             </button>
//                         </div>
//                     ) : (
//                         <form onSubmit={handleSignIn} className="space-y-6">
//                             <div>
//                                 <label className="block text-sm mb-2" htmlFor="email">Email</label>
//                                 <div className="flex items-center bg-gray-700 px-4 py-2 rounded-lg">
//                                     <FaUser />
//                                     <input
//                                         type="email"
//                                         id="email"
//                                         value={email}
//                                         onChange={(e) => setEmail(e.target.value)}
//                                         className="bg-transparent w-full focus:outline-none text-white rounded-md mx-2 pl-2"
//                                         placeholder="Enter your email"
//                                         required
//                                     />
//                                 </div>
//                             </div>
//                             <div>
//                                 <label className="block text-sm mb-2" htmlFor="password">Password</label>
//                                 <div className="flex items-center bg-gray-700 px-4  py-2 rounded-lg ">
//                                     <FaLock />
//                                     <input
//                                         type="password"
//                                         id="password"
//                                         value={password}
//                                         onChange={(e) => setPassword(e.target.value)}
//                                         className="bg-transparent w-full focus:outline-none text-white rounded-md mx-2 pl-2"
//                                         placeholder="Enter your password"
//                                         required
//                                     />
//                                 </div>
//                             </div>
//                             <button
//                                 type="submit"
//                                 className="w-full bg-purple-500 hover:bg-purple-700 transition text-white font-bold py-2 px-4 rounded-lg flex items-center justify-center">
//                                 <FaSignInAlt />
//                                 <p className = "mx-2">Sign In</p>
//                             </button>
//                         </form>
//                     )}
//                     {!session && (
//                         <>
//                             <button
//                                 type="button"
//                                 onClick={handleGitHubSignIn}
//                                 className="w-full bg-emerald-400 hover:bg-emerald-600 transition text-white font-bold py-2 px-4 rounded-lg flex items-center justify-center mt-4">
//                                 <FaSignInAlt  />
//                                 <p className = "mx-2">Sign In with GitHub</p>
//                             </button>
//                             <button
//                                 type="button"
//                                 onClick={handleGoogleSignIn}
//                                 className="w-full bg-blue-500 hover:bg-blue-700 transition text-white font-bold py-2 px-4 rounded-lg flex items-center justify-center p-2 mt-4">
//                                 <FaSignInAlt  />
//                                 <p className = "mx-2">Sign In with Google</p>
//                             </button>
//                         </>
//                     )}
//                     <p className="text-sm text-gray-400 text-center mt-6">
//                         Don&apos;t have an account? <a href="#" className="text-purple-400 hover:underline">Sign Up</a>
//                     </p>
//                 </div>
//             </main>

//             <footer className="bg-gray-800 py-4 mt-auto">
//                 <div className="max-w-7xl mx-auto px-4 text-center text-gray-400 text-sm">
//                     © 2024 My VebSite. All rights reserved.
//                 </div>
//             </footer>
//         </div>
//     );
// }
