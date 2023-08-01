import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { AuthProvider } from './context/authContext';
import { SidebarProvider } from './context/sidebarContext';
import { BlogsProvider } from './context/blogsContext';
import { UserProvider } from './context/userContext';
import { CommentProvider } from './context/commentContext';
import { Analytics } from '@vercel/analytics/react';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <AuthProvider>
        <SidebarProvider>
            <UserProvider>
                <BlogsProvider>
                    <CommentProvider>
                        <App />
                        <Analytics />
                    </CommentProvider>
                </BlogsProvider>
            </UserProvider>
        </SidebarProvider>
    </AuthProvider>
);


