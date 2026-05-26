export const metadata = {
  title: 'We-Mail 😎',
  description: 'Futuristic productivity inbox',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
