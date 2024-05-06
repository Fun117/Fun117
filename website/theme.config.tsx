const YEAR = new Date().getFullYear()

const config = {
  footer: (
    <small style={{ display: 'block', marginTop: '8rem' }}>
      Copyright &#169; <time>{YEAR}</time> Fun117. Built with Nextra.
      <a href="/feed.xml">RSS</a>
      <style jsx>{`
        a {
          float: right;
        }
        @media screen and (max-width: 480px) {
          article {
            padding-top: 2rem;
            padding-bottom: 4rem;
          }
        }
      `}</style>
    </small>
  )
};

export default config;
