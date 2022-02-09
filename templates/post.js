import Head from 'next/head'
import Link from 'next/link'

export default function Post({ children, frontMatter }) {
  const { title } = frontMatter;
  return (
    <div>
      <main >
        <div>
          { children }
        </div>
      </main>
    </div>
  )
}