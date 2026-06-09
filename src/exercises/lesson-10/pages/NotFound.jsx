import { Link, useLocation } from 'react-router-dom';

export default function NotFound() {
  const pathname = useLocation();

  return (
    <section>
      <h2>404: Not Found</h2>
      <p>{pathname} does not exist</p>
      <Link to='/lessons/lesson-10/'>Go home</Link>
    </section>
  );
}
