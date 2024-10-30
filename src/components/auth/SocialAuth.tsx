import React from 'react';

const socialProviders = [
  {
    id: 'google',
    name: 'Google',
    icon: 'https://www.google.com/favicon.ico',
  },
  {
    id: 'facebook',
    name: 'Facebook',
    icon: 'https://www.facebook.com/favicon.ico',
  },
];

export function SocialAuth() {
  return (
    <div className="space-y-4">
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-gray-300" />
        </div>
        <div className="relative flex justify-center text-sm">
          <span className="px-2 bg-white text-gray-500">Or continue with</span>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3">
        {socialProviders.map((provider) => (
          <button
            key={provider.id}
            className="btn-secondary"
            onClick={() => {
              // TODO: Implement social auth
              console.log(`Login with ${provider.name}`);
            }}
          >
            <img
              className="h-5 w-5 mr-2"
              src={provider.icon}
              alt={provider.name}
            />
            <span>{provider.name}</span>
          </button>
        ))}
      </div>
    </div>
  );
}