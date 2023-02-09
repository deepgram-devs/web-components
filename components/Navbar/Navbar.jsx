import { Fragment } from 'preact';
import Deepgram from '../Images/Deepgram'

const WWW_DOMAIN = 'https://deepgram.com'
const CONSOLE_DOMAIN = 'https://console.deepgram.com'
const DOCS_DOMAIN = 'https://developers.deepgram.com'
const STATUS_DOMAIN = 'https://status.deepgram.com'
const BLOG_DOMAIN = 'https://blog.deepgram.com'

function Link({ children, className, ...props}) {
  return (
    <a className={className} {...props}>{ children }</a>
  )
}

function NavItem({ children, className, ...props}) {
  return (
    <Link className={`button button--small button--main-nav button--nav-underline ${className}`} {...props}>{ children }</Link>
  )
}

function NavMenu() {
  return (
    <Fragment></Fragment>
  )
}

function NavMenuItem() {
  return (
    <Fragment></Fragment>
  )
}

function NavMenuPrimaryItem() {
  return (
    <Fragment></Fragment>
  )
}

function MobileNavItem() {
  return (
    <Fragment></Fragment>
  )
}

function MobileNavMenu() {
  return (
    <Fragment></Fragment>
  )
}

function MobileNavMenuItem() {
  return (
    <Fragment></Fragment>
  )
}

function Button() {
  return (
    <Fragment></Fragment>
  )
}

function DocSearch() {
  return (
    <Fragment></Fragment>
  )
}

function Svg() {
  return (
    <Fragment></Fragment>
  )
}

function Icon() {
  return (
    <Fragment></Fragment>
  )
}

export default function Navbar({ }) {
	return (
		<Fragment>
      <header class="sticky top-0 z-10">
        <div class="absolute w-full h-screen bg-black/75 text-white" style="display: none;"></div>
        <nav class="absolute inset-x-0 bg-almostBlack/80 text-white bg-blur">
          <div class="max-w-screen-2xl mx-auto px-6 lg:px-10 flex justify-between items-center xl:justify-start">
            <div class="mr-[2.875rem] pl-4">
              <Link href={WWW_DOMAIN} class="flex">
                <span class="sr-only">Deepgram</span>
                <Deepgram class="my-[1.125rem] h-[1.82rem] md:h-[2.3125rem] w-auto text-fireEngine" />
              </Link>
            </div>
            <div class="flex items-center space-x-5 xl:ml-12 pb-1 xl:hidden">
              <Button class="button button--mini sm:button--small button--secondary" aria-label="Mobile Menu">Menu</Button>
              <Link href={`${CONSOLE_DOMAIN}/signup`} class="button button--mini sm:button--small button--primary">Sign Up</Link>
            </div>
            <div class="hidden xl:flex-1 xl:flex xl:items-center xl:justify-between">
              <nav class="flex space-x-[2.1875rem]">
                <NavMenu name="Product" primary gridClass="lg:grid-cols-1 min-w-[18.25rem]">
                  <NavMenuPrimaryItem icon="arrow-right" slot="primary" href={`${WWW_DOMAIN}/product-overview`} description="Deepgram AI Speech Platform"
                    ><span class="text-white flex">Product Overview</span>

                    <a
                      href={`${WWW_DOMAIN}/product/transcription`}
                      slot="item-one"
                      class="container flex flex-col draw-underline text-lightIris decoration-lightIris font-medium text-xl gap-2 big-icon"
                    >
                      <div class="flex">
                        <Icon icon="bullseye" class="w-[1em] h-[1em] mr-2 mt-1" />
                        <span class="flex items-center text-white text-xl font-normal">Transcription</span>
                        <Icon icon="arrow-right" class="inner w-[1em] ml-[.5em] fill-lightIris" />
                      </div>
                      <p class="text-casper text-base font-normal">
                        Automatically transcribe real-time or pre-recorded audio and video into text with AI, plus formatting features for better readability.
                      </p>
                    </a>
                    <a
                      href={`${WWW_DOMAIN}/product/speech-understanding/`}
                      slot="item-two"
                      class="container flex flex-col draw-underline text-lightIris decoration-lightIris font-medium text-xl gap-2 big-icon"
                    >
                      <div class="flex">
                        <Icon icon="chart" class="w-[1em] h-[1em] mr-2 mt-1" />
                        <span class="flex items-center text-white text-xl font-normal">Understanding</span>
                        <Icon icon="arrow-right" class="inner w-[1em] ml-[.5em] fill-lightIris" />
                      </div>
                      <p class="text-casper text-base font-normal">
                        Natural Language Understanding (NLU) for true voice intelligence. Get features like summarization, sentiment analysis, language detection, and more.
                      </p>
                    </a>
                  </NavMenuPrimaryItem>
                  <div class="h-[216px] grid gap-y-6">
                    <NavMenuItem class="draw-underline decoration-lightIris" href={`${WWW_DOMAIN}/product/model-overview`} icon="model">Model Overview</NavMenuItem>
                    <NavMenuItem href={`${WWW_DOMAIN}/product/languages`} icon="globe">Languages</NavMenuItem>
                    <NavMenuItem href={`${WWW_DOMAIN}/why-deepgram`} icon="question">Why Deepgram</NavMenuItem>
                    <NavMenuItem href={`${CONSOLE_DOMAIN}/signup?jump=keys`} icon="code">Free API Key</NavMenuItem>
                  </div>
                </NavMenu>
                <NavMenu name="Solutions" gridClass="lg:grid-cols-1 min-w-[20.375rem]">
                  <NavMenuItem href={`${WWW_DOMAIN}/built-with-deepgram`} icon="sparkles">Built with Deepgram</NavMenuItem>
                  <NavMenuItem href={`${WWW_DOMAIN}/solutions/contact-centers`} icon="head-headphones">Contact Centers</NavMenuItem>
                  <NavMenuItem href={`${WWW_DOMAIN}/solutions/speech-analytics`} icon="mag-glass-soundwave">Speech Analytics</NavMenuItem>
                  <NavMenuItem href={`${WWW_DOMAIN}/solutions/voicebots`} icon="robot-head">Conversational AI</NavMenuItem>
                  <NavMenuItem href={`${WWW_DOMAIN}/deepgram-for-podcast-transcription`} icon="microphone">Podcast Transcription</NavMenuItem>
                </NavMenu>
                <NavMenu name="Compare" gridClass="lg:grid-cols-1 min-w-[26.375rem]">
                  <NavMenuItem href={`${WWW_DOMAIN}/asr-comparison/`} icon="bar-chart">ASR Comparison Tool</NavMenuItem>
                  <NavMenuItem href={`https://offers.deepgram.com/whisper-benchmark-thank-you`} icon="scale">Whisper vs. Deepgram Benchmark</NavMenuItem>
                  <NavMenuItem href={`${WWW_DOMAIN}/compare-google-stt-alternatives/`} icon="scale">Compare to Google STT</NavMenuItem>
                  <NavMenuItem href={`${WWW_DOMAIN}/compare-amazon-transcribe-api-alternatives/`} icon="scale">Compare to AWS Transcribe</NavMenuItem>
                  <NavMenuItem href={`${WWW_DOMAIN}/compare-microsoft-azure-stt-alternatives/`} icon="scale">Compare to Microsoft STT</NavMenuItem>
                  <NavMenuItem href={`${WWW_DOMAIN}compare-nuance-dragon-speech-recognition-alternatives/`} icon="scale">Compare to Nuance Dragon</NavMenuItem>
                  <NavMenuItem href={`${WWW_DOMAIN}/compare-assembly-ai-speech-to-text-api-alternatives/`} icon="scale">Compare to Assembly AI</NavMenuItem>
                  <NavMenuItem href={`${WWW_DOMAIN}/compare-speechmatics-speech-to-text-api-alternatives/`} icon="scale">Compare to Speechmatics</NavMenuItem>
                </NavMenu>
                <NavItem href={`${WWW_DOMAIN}/pricing`} class="text-white">Pricing</NavItem>
                <NavMenu name="Docs" gridClass="lg:grid-cols-2 min-w-[36.375rem]">
                  <NavMenuItem href={DOCS_DOMAIN} icon="file">Documentation</NavMenuItem>
                  <NavMenuItem href={`${DOCS_DOMAIN}/on-prem/`} icon="server-icon">On-Prem Deployment</NavMenuItem>
                  <NavMenuItem href={`${DOCS_DOMAIN}/documentation/guides/`} icon="book">Guides</NavMenuItem>
                  <NavMenuItem href={`${DOCS_DOMAIN}/api-reference/`} icon="code-laptop">API Reference</NavMenuItem>
                  <NavMenuItem href={`${DOCS_DOMAIN}/documentation/getting-started/`} icon="grad">Tutorials</NavMenuItem>
                  <NavMenuItem href={STATUS_DOMAIN} icon="heartbeat">Status</NavMenuItem>
                  <NavMenuItem href={`${DOCS_DOMAIN}/sdks-tools/`} icon="box">SDKs + Tools</NavMenuItem>
                  <NavMenuItem href={`${WWW_DOMAIN}/changelog`} icon="rotating-gear">Changelog</NavMenuItem>
                  <NavMenuItem href={`https://github.com/orgs/deepgram/discussions`} class="github" icon="github">Community Forum</NavMenuItem>
                </NavMenu>
                <NavItem href={BLOG_DOMAIN} class="text-white">Blog</NavItem>
              </nav>
              <div class="flex space-x-[1rem] items-center xl:ml-12 pr-4">
                <Button id="docsearch-button" icon="search" class="button big-icon button--main-nav" aria-label="Search" />
                <Link href={`${CONSOLE_DOMAIN}/login`} class="button button--small button--main-nav text-white">Log In</Link>
                <Link href={`${WWW_DOMAIN}/contact-us`} class="button button--secondary button--small w-[7rem]">Contact Us</Link>
                <Link href={`${CONSOLE_DOMAIN}/signup`} class="button button--primary button--small w-[7rem]">Sign Up</Link>
              </div>
            </div>
          </div>
          <div class="fixed flex flex-col h-screen inset-0 xl:hidden bg-black" style="display: none;">
            <div class="relative inset-x-0 bg-almostBlack text-white">
              <div class="max-w-screen-2xl mx-auto px-6 flex justify-between items-center xl:justify-start">
                <div class="mr-[2.875rem]">
                  <Link href={WWW_DOMAIN} class="flex">
                    <span class="sr-only">Deepgram</span>
                    <Svg name="deepgram" class="my-[1.125rem] h-[1.82rem] w-auto text-dgRed" />
                  </Link>
                </div>
                <div class="flex items-center space-x-5 xl:ml-12 pb-1 xl:hidden">
                  <Button id="docsearch-button-mobile" icon="search" class="button big-icon button--main-nav" aria-label="Search" />
                  <Button icon="xmark-large" class="button big-icon button--main-nav" aria-label="Close Menu" />
                </div>
              </div>
            </div>
            <div class="grow flex flex-col justify-between overflow-y-scroll">
              <div class="bg-darkCharcoal">
                <nav class="grid font-bold">
                  <MobileNavMenu name="Product" primary>
                    <MobileNavMenuItem href={`${WWW_DOMAIN}/product`} icon="star">View Product</MobileNavMenuItem>
                    <MobileNavMenuItem href={`${WWW_DOMAIN}/product/model-overview`} icon="model">Model Overview</MobileNavMenuItem>
                    <MobileNavMenuItem href={`${WWW_DOMAIN}/product/languages`} icon="globe">Languages</MobileNavMenuItem>
                    <MobileNavMenuItem href={`${CONSOLE_DOMAIN}/signup?jump=keys`} icon="code">Free API Key</MobileNavMenuItem>
                    <MobileNavMenuItem href={`${WWW_DOMAIN}/why-deepgram`} icon="question">Why Deepgram</MobileNavMenuItem>
                  </MobileNavMenu>
                  <MobileNavMenu name="Solutions">
                    <MobileNavMenuItem href={`${WWW_DOMAIN}/built-with-deepgram`} icon="sparkles">Built with Deepgram</MobileNavMenuItem>
                    <MobileNavMenuItem href={`${WWW_DOMAIN}/solutions/contact-centers`} icon="head-headphones">Contact Centers</MobileNavMenuItem>
                    <MobileNavMenuItem href={`${WWW_DOMAIN}/solutions/speech-analytics`} icon="mag-glass-soundwave">Speech Analytics</MobileNavMenuItem>
                    <MobileNavMenuItem href={`${WWW_DOMAIN}/solutions/voicebots`} icon="robot-head">Convo AI</MobileNavMenuItem>
                    <MobileNavMenuItem href={`${WWW_DOMAIN}/deepgram-for-podcast-transcription`} icon="microphone">Podcast Transcription</MobileNavMenuItem>
                  </MobileNavMenu>
                  <MobileNavItem href={`${WWW_DOMAIN}/pricing`} class="text-white">Pricing</MobileNavItem>
                  <MobileNavMenu name="Docs">
                    <MobileNavMenuItem href={DOCS_DOMAIN} icon="file">Documentation</MobileNavMenuItem>
                    <MobileNavMenuItem href={`${DOCS_DOMAIN}/on-prem/`} icon="server-icon">On-Prem Deployment</MobileNavMenuItem>
                    <MobileNavMenuItem href={`${DOCS_DOMAIN}/documentation/guides/`} icon="code-laptop">Guides</MobileNavMenuItem>
                    <MobileNavMenuItem href={`${DOCS_DOMAIN}/api-reference/`} icon="grad">API Reference</MobileNavMenuItem>
                    <MobileNavMenuItem href={`${DOCS_DOMAIN}/tags/tutorial/`} icon="rotating-gear">Tutorials</MobileNavMenuItem>
                    <MobileNavMenuItem href={STATUS_DOMAIN} icon="book">Status</MobileNavMenuItem>
                    <MobileNavMenuItem href={`${DOCS_DOMAIN}/sdks-tools/`} icon="box">SDKs + Tools</MobileNavMenuItem>
                    <MobileNavMenuItem href={`${WWW_DOMAIN}/changelog`} icon="heartbeat">Changelog</MobileNavMenuItem>
                  </MobileNavMenu>
                  <MobileNavItem href={BLOG_DOMAIN} class="text-white">Blog</MobileNavItem>
                  <MobileNavMenu name="About">
                    <MobileNavMenuItem href={`${WWW_DOMAIN}/about`} icon="deepgram-d">About Us</MobileNavMenuItem>
                    <MobileNavMenuItem href="https://github.com/orgs/deepgram/discussions" icon="github">Community Forum</MobileNavMenuItem>
                    <MobileNavMenuItem href={`${WWW_DOMAIN}/company/newsroom`} icon="newspaper">Newsroom</MobileNavMenuItem>
                    <MobileNavMenuItem href={`${WWW_DOMAIN}/company/careers`} icon="open-door">Careers</MobileNavMenuItem>
                  </MobileNavMenu>
                </nav>
              </div>
            </div>
            <div class="bg-black grid grid-cols-2 grid-rows-2 gap-4 p-6 shadow-menu">
              <Link href={`${CONSOLE_DOMAIN}/login`} class="button button--small button--secondary button--block">Log In</Link>
              <Link href={`${CONSOLE_DOMAIN}/signup`} class="button button--small button--tertiary button--block">Sign Up</Link>
              <Link href={`${WWW_DOMAIN}/contact-us`} class="col-span-2 button button--small button--primary button--block">Contact Us</Link>
            </div>
          </div>
        </nav>
        <DocSearch />
      </header>
		</Fragment>
	);
}