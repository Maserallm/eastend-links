import React from "react";
import { Link } from "gatsby";
import { FiInstagram, FiTwitter, FiFacebook, FiMail } from "react-icons/fi";
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
          src="https://res.cloudinary.com/dtxylaqlc/image/upload/v1617738720/Eastend%20Links%20Photos/Nell_Beamen_-_01_jdhd4m.jpg"
          alt="Nell Beamen"
        />

        <figcaption>Nell Beamen</figcaption>
      </figure>
      <h2>STAY BEAMEN</h2>
      <br />

      <blockquote>
        <p>I told my cousin, 'Look how much I made off pronouns' </p>
      </blockquote>

      <p>
        Nell Beamen is another local artist who’s been on our radar from
        Davenport, Florida. Growing up, life was tough in the part of Davenport
        Beamen lived in. He faced great challenges in his adolescent years that
        helped shape and develop who he is today. Going from having league
        dreams playing college football to discovering his talents as a savvy
        rapper, this is the story of Nell Beamen and how his musical journey
        continues to rise.
      </p>

      <p>
        Beamen’s musical journey stems back to his family who were musically
        inclined. His family had deep ties to the church and served faithfully
        in that regard. As he spent time with his family in the church and
        noticed several key family members with the ability to sing, Nell Beamen
        discovered his own voice. It was easy for him to create music
        immediately as he is telling his life story with his rhymes. What
        continuously inspires him to create music is the positive feedback he
        receives from everyone who supports him, and his own personal enjoyment
        from creating music.
      </p>
      <div className="tip tip-right">
        <a href="https://open.spotify.com/artist/4UuHZsSKP2A5x833MDYye9?si=8GOdtH12RzSJHMlvU7VJug">
          <img
            src="https://res.cloudinary.com/dtxylaqlc/image/upload/v1617741027/Eastend%20Links%20Photos/Nell_Beamen_-_The_Cure_Cover_wkheiq.jpg"
            alt="Nell Beamen The Cure"
          />
        </a>

        <figcaption>
          <i>The Cure</i>
        </figcaption>
        <p>
          Listen to <strong>Nell Beamen's</strong> latest project{" "}
          <em>
            <a href="https://www.youtube.com/channel/UC59nWOrCeJu6Lq6Y76zdfDQ/featured">
              <strong>The Cure </strong>
            </a>
          </em>{" "}
          on{" "}
          <a href="https://open.spotify.com/artist/4UuHZsSKP2A5x833MDYye9?si=8GOdtH12RzSJHMlvU7VJug">
            Spotify
          </a>
        </p>
      </div>
      <p>
        Furthermore, playing football was Nell Beamen’s dream when he was
        younger. He aspired to play in the NFL and managed to play college
        football for Laney College and the University of South Alabama. During
        his college years Beamen began experimenting with rapping during his
        time on the field. His original rap moniker was just Nell to remain
        anonymous from his coaches. Beamen made a remix to MadeinTYO’s hit song
        Uber Everywhere and his team played it during practices and at parties.
        He didn’t want his coaches to uncover his true identity while he was
        rapping because they already deemed him to be a failure. The Beamen part
        of his name originated from the movie Any Given Sunday. Similar to how
        Willie Beamen vomited on the field, Beamen did the same thing during a
        scrimmage due to the fact he was hungover during practice. His teammates
        began to call him Willie Beamen and he decided to embrace it and
        incorporate it into his rap name today.
      </p>
      {/* <figure> */}
      <img
        src="https://res.cloudinary.com/dtxylaqlc/image/upload/v1617738720/Eastend%20Links%20Photos/Nell_Beamen_-_02_lo7hye.jpg"
        alt="Nell Beamen"
      />
      <figcaption>I got leg room</figcaption>
      {/* </figure> */}
      <p>
        Additionally, COVID-19 has affected all of our daily lives negatively.
        As the virus forcibly placed the world on lockdown, the global economy
        was dramatically spiraling out of control. Most people have lost their
        jobs and couldn’t find any means to provide for their families. Beamen
        was also affected by the pandemic as well. During lockdown he couldn’t
        take trips to the studio which halted him from making music and creating
        content for his followers. With a stroke of good fortune he prepared
        himself by having a studio at home, which allowed him to create his
        latest mixtape called “The Cure.” The project was ultimately named “The
        Cure,” because of the significant impact COVID has had on our lives.
      </p>

      {/* <img
        src="https://res.cloudinary.com/dtxylaqlc/image/upload/v1604155255/2D0E9C3E-0426-4176-A305-EF498BD473C2_rddugu.jpg"
        alt="Eazy"
      /> */}

      <p>
        Regrettably, Beamen contracted COVID himself. He was aware that he had
        the virus due to his inability to taste or smell anything (a few
        symptoms known of the virus). This affected Beamen internally because
        two weeks prior his newborn daughter was born and he had to remain in
        self-quarantine until he was cleared from the virus. Unable to spend
        time with his children, creating content and music to expand his brand,
        Nell Beamen was stuck in a shell until his time in self-quarantine was
        over. Now that he is cleared from the virus, He is taking the necessary
        steps to prevent himself from being reinfected and keep producing high
        quality music.
      </p>
      <figure>
        <img
          src="https://res.cloudinary.com/dtxylaqlc/image/upload/v1617738720/Eastend%20Links%20Photos/Nell_Beamen_-_03_gzcgqd.jpg"
          alt="Nell Beamen"
        />

        <figcaption>Stay linked</figcaption>
      </figure>

      <p>
        Without a doubt, the most difficult aspect of Nell Beamen’s musical
        journey is being renowned worldwide as a successful artist. The music
        industry is one of the toughest industries to be successful in as the
        competition is rampant. The amount of hours an artist must put in the
        studio, the marketing and the many different dynamics that plays a role
        in reaching a nationwide audience is a great challenge. Locally, Nell
        Beamen is a well respected artist with an impressive sound, but from the
        words of the artist himself, “the world is a bigger place than Polk
        County.” Regardless of the process of becoming a top rapper, Nell Beamen
        is taking the necessary steps to making it in the Hip-Hop scene. With
        his fan-base and local natives of Polk County as a firm foundation, his
        extensive network of producers, artists, and sound engineers in various
        cities from Miami to Atlanta is expanding.
      </p>

      <p>
        In the end, Beamen’s platform is on the rise. As he and his brand
        continues to grow, we at Eastend Links highly recommend you support Nell
        Beamen and listen to his most recent release <i>The Cure</i>.
      </p>

      <br />
      <h2>Written By:</h2>
      <blockquote>
        <p>
          {" "}
          ~<a href="https://www.instagram.com/soirilus_/">Jonathan Soirilus</a>
        </p>
        <p
          style={{
            textAlign: "center",
            fontSize: "20px",
            fontFamily: "initial"
          }}
        >
          Links to reach Nell Beamen:
          <br />
          <br />
          <a href="https://www.instagram.com/nellbeamen/">
            <FiInstagram /> Instagram: @nellbeamen
          </a>
          <br />
          <a href="https://twitter.com/NellBeamen">
            <FiTwitter /> Twitter: @NellBeamen
          </a>
          <br />
          <a href="https://www.facebook.com/NellBeamen">
            <FiFacebook /> Facebook: NellBeamen
          </a>
        </p>
      </blockquote>

      <blockquote>
        <p>
          Next Up:
          <br />
          <Link to="/rcfit">Hard Knocks: RC FIT 7</Link>
        </p>
      </blockquote>
    </article>
  </>
);

export default IndexPage;
