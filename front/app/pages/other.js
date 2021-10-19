import Link from 'next/link';

export default function Other() {
  return <div>
          <p>別ページ</p>
          <Link href="/">
            <a>Back to home</a>
          </Link>
         </div>;
}

//export default Other;
