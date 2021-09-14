import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'
import Head from 'next/head'
import { Main } from 'templates'
import { CurrentAuctions as CurrentAuctionsGrid } from 'modules/BazaarAuctions'
import { GetStaticProps } from 'next'
import { buildUrl } from 'utils'
import { endpoints, paths, routes } from 'Constants'

const pageUrl = buildUrl(routes.HOME)

export default function Home(): JSX.Element {
  const { t } = useTranslation('homepage')

  return (
    <div>
      <Head>
        <title>{t('Meta.title')}</title>
        <meta name="title" content={t('Meta.title')} />
        <meta property="og:site_name" content={t('Meta.title')} />
        <meta property="og:title" content={t('Meta.title')} />
        <meta property="twitter:title" content={t('Meta.title')} />

        <meta name="description" content={t('Meta.description')} />
        <meta property="twitter:description" content={t('Meta.description')} />
        <meta property="og:description" content={t('Meta.description')} />
        <meta property="og:type" content="website" />

        <link rel="canonical" href={pageUrl} />
        <meta property="og:url" content={pageUrl} />
        <meta property="twitter:url" content={pageUrl} />

        <link rel="alternate" hrefLang="en" href={pageUrl} />
        <link
          rel="alternate"
          hrefLang="pt"
          href={buildUrl(routes.HOME, 'pt')}
        />
        <link
          rel="alternate"
          hrefLang="es"
          href={buildUrl(routes.HOME, 'es')}
        />
        <link rel="alternate" hrefLang="x-default" href={pageUrl} />

        <link
          rel="preload"
          href={`${endpoints.BASE_DATA}${paths.CHARACTER_DATA}`}
          as="fetch"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href={`${endpoints.BASE_DATA}${paths.SERVER_DATA}`}
          as="fetch"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href={`${endpoints.BASE_DATA}${paths.ITEMS_DATA}`}
          as="fetch"
          crossOrigin="anonymous"
        />
      </Head>

      <Main>
        <CurrentAuctionsGrid />
      </Main>
    </div>
  )
}

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale as string, ['common', 'homepage'])),
  },
})
