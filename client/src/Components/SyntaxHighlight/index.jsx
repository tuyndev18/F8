// SyntaxHighlight.tsx
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/cjs/styles/prism';

const SyntaxHighlight = {
	code({ node, inline, className, children, ...props }) {
		const match = /language-(\w+)/.exec(className || '');
		return !inline && match ? (
			<SyntaxHighlighter
				children={String(children).replace(/\n$/, '')}
				style={dracula}
				language={match[1]}
				PreTag="div"
				{...props}
			/>
		) : (
			<code className={className} {...props}>
				{children}
			</code>
		);
	},
};

export default SyntaxHighlight;
