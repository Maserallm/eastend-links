import React from "react";
import { Link } from "gatsby";
import { FiInstagram, FiTwitter, FiFacebook, FiYoutube } from "react-icons/fi";
// import Img from "gatsby-image"

// import Image from "../components/image"
import SEO from "../components/seo";
// import articleCover from "https://res.cloudinary.com/dtxylaqlc/image/upload/v1604155238/woo_eazy_article_header_eeuas5.jpg"

// import "../pages/styles/index.scss"

// export const query = graphql``

// Query MDX to this index page so that articles are brought in by the most recent post.
// Create Articles Page that contains the previous articles with images of previous interviews

const IndexPage = () => (
  <>
    <SEO title="Home" />
    <article className="post">
      {/* <Img fixed={} /> */}
      {/* <img
        src="../images/woo_eazy_article_header.JPEG"
        alt="Woo.Marc founder and owner Maserall with FFTE's very own Eazy"
      /> */}
      <figure>
        <img
          src="https://res.cloudinary.com/dtxylaqlc/image/upload/v1606862456/01_hardnard_oqmjmr.jpg"
          alt="HardNard"
        />

        <figcaption>HardNard</figcaption>
      </figure>
      <h2>Hard Nard: Knee Deep</h2>
      {/* <h2>Woo.Marc ~ Connect the Codes</h2> */}
      <br />
      <p>
        The Central Florida rap scene continues to unfold right in front of our
        eyes, as local talent emerges from this area at a frequent rate. One of
        the local talents who constantly impress us here at EastEnd Links is
        HardNard. As he continues to shape his story, work on his flow, expand
        the Knee Deep brand, and promote his upcoming album “Hard”, HardNard
        will be a force to be reckoned with as we bear witness to the birth of a
        legend.
      </p>
      {/* <div className="tip tip-right">
        <p>
          This is a story about humble beginnings told by{" "}
          <a href="https://www.instagram.com/soirilus_/">Soirilus</a>
        </p>
      </div> */}
      <blockquote>
        <p>"When life gets dark, it forces you to get hard"</p>
      </blockquote>
      <div className="tip tip-right">
        <a
          href="https://open.spotify.com/track/1ndOr9Um0fn4Dy6AlaumYr?si=wiW-kFr6Qd27lMSocG_t3Q"
          target="_blank"
        >
          <img
            src="https://res.cloudinary.com/dtxylaqlc/image/upload/v1607041456/image00002_oxhkjy.jpg"
            alt="Hard Nard Album Artwork"
          />
        </a>
        <figcaption>
          {/* New HardNard album <i>Hard</i> */}
          New album by HardNard <i>Hard</i>
        </figcaption>
        <p>
          Listen to <strong>Hard Nard's</strong> new album{" "}
          <em>
            <a
              href="https://open.spotify.com/album/52eG7WKRQbovO8g20RqtIy?si=OKuI0_WxQfajecfbfqGO7A&dl_branch=1"
              target="_blank"
            >
              <strong>Hard </strong>
            </a>
          </em>{" "}
          on{" "}
          <a
            href="https://open.spotify.com/artist/0SLEnkMu9lviIYbD3pn8xL?si=Fg23oWXoRem_Ze1M2WIaJA&dl_branch=1"
            target="_blank"
          >
            Spotify
          </a>
        </p>
      </div>
      <p>
        HardNard, originally from Florida, spent a good portion of his youth
        moving around constantly. Charlotte, North Carolina, is one of the few
        places the artist resided in that quickly became his second home.
        Although, at the very young age of thirteen, the artist was already
        exposed to a life on the streets, he experienced many traumatic events
        that would scar a child. Running from the cops with a fear of going to
        jail at an early age, selling weed, and many more nefarious deeds. He
        had to grow up quickly and maneuver his way around the streets to
        survive. As he grew older he became aware of how to leave this
        lifestyle. HardNard wanted to make a change to provide for himself and
        the people around him, and music was the avenue that could help him
        reach the life he truly sought after.
      </p>
      {/* <figure> */}
      <img
        src="https://res.cloudinary.com/dtxylaqlc/image/upload/v1606862455/02_hardnard_lhrdrq.jpg"
        alt="Big Ass"
      />
      <figcaption>Hard</figcaption>
      {/* </figure> */}
      <p>
        HardNard has been writing music since childhood and was presented with
        the opportunity to enter a studio from a producer named Trill. Trill
        always encouraged HardNard to enter the booth to freestyle, his
        reasoning behind this was to teach HardNard to be prepared at all times
        to produce music, because he wouldn’t have the opportunity to write
        every track in this industry. Naturally, HardNard protested but as the
        pressure from Trill began to pile up, he gave it a shot. Now
        appreciative to Trill, HardNard is comfortable to freestyle and produce
        music without writing it. Unfortunately, in an attempt to rob Trill, he
        was shot and passed away. Shortly after, HardNard returned to Florida
        and received the news of Trill’s passing. Suddenly, an attempt on his
        life was made and HardNard was shot in the leg. This action has truly
        placed him in a dark place and he was not capable of trusting anyone for
        a long time. Albeit, HardNard has faced many tragedies in his life,
        being shot teached him to move differently and granted him a humbled
        approach to life.
      </p>
      <img
        src="https://res.cloudinary.com/dtxylaqlc/image/upload/v1606862455/03_hardnard_r5luyy.jpg"
        alt="Eazy"
      />
      {/* <img
        src="https://res.cloudinary.com/dtxylaqlc/image/upload/v1604155255/2D0E9C3E-0426-4176-A305-EF498BD473C2_rddugu.jpg"
        alt="Eazy"
      /> */}
      <figcaption>Posted up, Knee Deep</figcaption>
      <p>
        Consequently, division remains an unwanted part of the rap world.
        Individuals will always look out for themselves instead of cooperating
        with others to achieve the same goals. The local rap political scene in
        Central Florida is no different. Cities such as Atlanta and New York
        often have many networking opportunities so that artists work together
        to not only enhance their craft, but push each other to the next level.
        After visiting Atlanta, HardNard wants to bring that same level of unity
        here in Florida. To make that goal a reality the artist has collaborated
        with other artists such as Eazy and many more local artists. In fact,
        Eazy and HardNard's relationship is brimmed with genuine respect for
        each other and their respective crafts. Eazy and HardNard have been
        friends for several years, which highlights their brilliant chemistry
        when creating tracks together. Eazy will also encourage HardNard to go
        to the studio from time to time and not be complacent as he sees the
        potential in HardNard. The two will continue to work together in future
        as they build their respective brands.
      </p>
      <figure>
        <img
          src="https://res.cloudinary.com/dtxylaqlc/image/upload/v1606862455/04_hardnard_puqynp.jpg"
          alt="Big Ass"
        />
        <figcaption>SPO (Safe Plays Only)</figcaption>
      </figure>

      <p>
        Additionally, HardNard is the CEO of Knee Deep and an affiliate to the
        SPO (Safe Plays Only) brand. Knee Deep as a brand contains a deeper
        meaning that most people wouldn’t know about. Knee Deep is also a form
        of inspiration for those who have a goal to pursue that goal with
        everything you have. The brand's meaning is a constant reminder that
        consistently keeping the artist and his team around him motivated to
        keep chasing their dreams. “Knee Deep is a lifestyle.” HardNard said.
        “Whatever you do in life, whether it be ball or rapping, you knee Deep
        in it.” Furthermore, SPO was a brand founded by a friend of HardNard’s
        named Trap Dinero several years back. The brand quickly grew popular as
        it resembles many designer outfits and many celebrities/influencers
        showcase it on their platforms.
      </p>

      <p>
        All in All, HardNard is one of the many promising talents in Central
        Florida. His upcoming album “Hard,”carries a very significant meaning to
        the Central Florida artist. This piece of work was meant to prove to
        those who doubt the artist's validity in the game that he is still
        willing to give it his all to continue making music. After releasing
        several projects in the past, experiencing minor success and setbacks,
        the artist wanted to create a stepping stone with his album to
        officially show his supporters that he is looking optimistically forward
        to the future in his music career. Also, expanding his brand Knee Deep
        and continually improving on his sound.
      </p>

      <figure>
        <img
          src="https://res.cloudinary.com/dtxylaqlc/image/upload/v1606862455/05_hardnard_miutja.jpg"
          alt="Maserall and Eazy"
        />

        <figcaption>
          <em>Linked</em>
        </figcaption>
      </figure>
      <h2>Written By:</h2>
      <blockquote>
        <p>
          {" "}
          ~
          <a href="https://www.instagram.com/soirilus_/" target="_blank">
            Jonathan Soirilus
          </a>
        </p>
        <p
          style={{
            textAlign: "center",
            fontSize: "20px",
            fontFamily: "initial"
          }}
        >
          Links to reach HardNard:
          <br />
          <br />
          <a href="https://www.instagram.com/realdealhardnard/" target="_blank">
            <FiInstagram /> Instagram: @realdealhardnard
          </a>
          <br />
          <a
            href="https://www.youtube.com/channel/UCrSlHChNFSOItsUCy_6bwyA"
            target="_blank"
          >
            <FiYoutube /> YouTube: Official Hard Nard Channel
          </a>
          <br />
          <a href="https://twitter.com/LastDon100" target="_blank">
            <FiTwitter /> Twitter: @lastdon100
          </a>
          <br />
          <a href="https://www.facebook.com/hardn" target="_blank">
            <FiFacebook /> Facebook: Nutty Finesser
          </a>
        </p>
      </blockquote>

      <blockquote>
        <p>
          Next Up:
          <br />
          <Link to="/woomarc">Woo.Marc: Connect the Codes</Link>
        </p>
      </blockquote>
    </article>
  </>
);

export default IndexPage;
