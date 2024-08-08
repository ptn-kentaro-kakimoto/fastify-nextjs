import cookie from 'cookie';

export async function getServerSideProps({ req, res }) {
  console.log("####################################################")
  console.log(res.getHeader('Set-Cookie'));
  const setCookie = res.getHeader('Set-Cookie')
  res.setHeader(
    'Set-Cookie',
    [
    cookie.serialize('nextJsCookie', 'nextJsValue', {
      path: '/',
      httpOnly: true,
      sameSite: 'lax',
      maxAge: 3600,
    }), setCookie]
  );

  return {
    props: {},
  };
}

export default () => <div>hello world</div>
