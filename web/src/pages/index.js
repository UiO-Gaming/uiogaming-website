import React from "react";
import { graphql } from "gatsby";

/* Standard Components */
import Layout from "../components/layout";
import SEO from "../components/seo";

/* Components */
import Nav from "../components/nav";

/* Images */
import logo from "../images/logo.jpg";
import placeholderImage from "../images/placeholderImage.png";

/* Icons */
import {
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaFacebook,
  FaGithub,
  FaDiscord,
  FaAt,
  FaInstagram,
} from "react-icons/fa";

export const query = graphql`
  {
    allSanityAuthor(
      sort: { fields: order }
      filter: { boardMember: { eq: true } }
    ) {
      edges {
        node {
          name
          boardMember
          email
          role
          order
          bio {
            children {
              text
            }
          }
          image {
            asset {
              fixed(width: 128, height: 128) {
                src
              }
            }
          }
        }
      }
    }
    allSanityEvent(sort: { fields: date, order: ASC }) {
      edges {
        node {
          date
          title
          location
          slug {
            current
          }
          body {
            children {
              text
            }
          }
        }
      }
    }
    allSanityPost(sort: { fields: publishedAt, order: DESC }, limit: 3) {
      edges {
        node {
          title
          excerpt
          publishedAt(formatString: "DD.MM.Y")
          author {
            name
            image {
              asset {
                fixed(width: 50, height: 50) {
                  src
                }
              }
            }
          }
          slug {
            current
          }
        }
      }
    }
  }
`;

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="UiO Gaming" />

    <Nav />

    <header id="hjem" className="text-center">
      <div className="header">
        <img src={logo} />
        <h1>UiO Gaming</h1>
        <p>
          En hobbyforening som ønsker skape et sosialt miljø rundt gaming og
          E-sport på UiO
        </p>
      </div>
    </header>

    <section id="om">
      <div className="container">
        <div className="split">
          <div className="split-image-container">
            <img className="no-mobile" src={placeholderImage} />
          </div>

          <div>
            <h2>Hvem er vi?</h2>

            <p>
              UiO Gaming er en forening med hovedfokus på å danne et
              inkluderende fellesskap rundt videospill og E-sport. Hos oss er
              det enkelt å skaffe seg venner, ettersom alle har felles
              interesser. Vi arrangerer ukentlige spillkvelder og fysiske
              sosiale arrangementer, som for eksempel brettspillkvelder og
              sosiale sammenkomster. Vår hovedkanal er en aktiv Discord-server
              hvor man kan møte nye folk med felles interesser og game med andre
              studenter.
            </p>

            <div className="join-button-container">
              <h3>Interessert?</h3>
              <a
                href="https://discord.gg/556mseV"
                target="_blank"
                className="join-button"
              >
                Bli med!
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="arrangementer">
      <div className="container">
        <div className="split">
          <div>
            <h2>Kommende Arrangementer</h2>
            <div className="eventcard-container">
              {data.allSanityEvent.edges
                .filter(
                  ({ node }) => new Date(node.date).getTime() > Date.now()
                )
                .slice(0, 2)
                .map(({ node: event }) => (
                  <a href={"event/" + event.slug.current}>
                    <article className="eventcard">
                      <h3>{event.title}</h3>
                      <div>
                        <div>
                          <FaMapMarkerAlt />
                          <p>{event.location}</p>
                        </div>
                        <div>
                          <FaCalendarAlt />
                          <p>
                            {new Date(event.date).toLocaleString("nb-NO", {
                              weekday: "long",
                              year: "numeric",
                              month: "long",
                              day: "numeric",
                            })}
                          </p>
                        </div>
                      </div>
                      <p>{event.body[0].children[0].text}</p>
                    </article>
                  </a>
                ))}
            </div>
          </div>

          <div>
            <img className="no-mobile" src={placeholderImage} />
          </div>
        </div>
      </div>
    </section>

    <section id="blogg">
      <div className="container">
        <h2 className="text-center">Bloggen</h2>

        <div className="split blogcard-container">
          {data.allSanityPost.edges.map(({ node: post }) => (
            <a href={"blog/" + post.slug.current}>
              <article className="split blogcard">
                <div>
                  <img src={placeholderImage} />
                </div>

                <div className="blogcard-content">
                  <h3>{post.title}</h3>
                  <div className="blogcard-author">
                    <img src={post.author.image.asset.fixed.src} />
                    <p>{post.author.name}</p>
                  </div>
                  <p>
                    Publisert: <time>{post.publishedAt}</time>
                  </p>
                  <p>{post.excerpt}</p>
                </div>
              </article>
            </a>
          ))}

          <a href="/blog">Se alle blogginnlegg</a>
        </div>
      </div>
    </section>

    <section id="styret">
      <div className="container">
        <h2 className="text-center">Styret</h2>

        <div className="membercard-container">
          {data.allSanityAuthor.edges.map(({ node: member }) => (
            <article className="membercard">
              <div className="split membercard-header">
                <img src={member.image.asset.fixed.src} />

                <div className="membercard-header-info">
                  <h3>{member.name}</h3>
                  <p>{member.role}</p>
                </div>
              </div>

              <p>{member.bio[0].children[0].text}</p>

              <div className="membercard-footer">
                <p className="text-center">{member.email}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>

    <section id="kontakt">
      <div className="container">
        <h2 className="text-center">Finn oss</h2>
        <div className="contact-container">
          <div className="contact">
            <FaAt />
            <a href="mailto:styret.uiogaming@gmail.com" target="_blank">
              E-post
            </a>
          </div>
          <div className="contact">
            <FaDiscord />
            <a href="https://discord.gg/PqsgXbnds4" target="_blank">
              Discord
            </a>
          </div>
          <div className="contact">
            <FaFacebook />
            <a
              href="https://www.facebook.com/UiO-Gaming-113445760510985"
              target="_blank"
            >
              Facebook
            </a>
          </div>
          <div className="contact">
            <FaInstagram />
            <a href="https://www.instagram.com/uio_gaming/" target="_blank">
              Instagram
            </a>
          </div>
          <div className="contact">
            <FaGithub />
            <a href="https://github.com/UiO-Gaming" target="_blank">
              GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  </Layout>
);

export default IndexPage;
