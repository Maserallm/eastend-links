import React from "react";
import { Link } from "gatsby";
import { FiInstagram, FiTwitter, FiFacebook } from "react-icons/fi";
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
          src="https://res.cloudinary.com/dtxylaqlc/image/upload/v1609821209/DSC07666_rzh3p7.jpg"
          // src="https://res.cloudinary.com/dtxylaqlc/image/upload/v1609821209/DSC07712_pmqlct.jpg"
          alt="TBEEZI"
        />

        <figcaption>TBEEZI</figcaption>
      </figure>
      <h2>The Season of the Beez</h2>
      {/* <h2>Woo.Marc ~ Connect the Codes</h2> */}
      <br />
      <p>
        Tbeezi is an artist located in Central Florida who earned our attention
        here at Eastend Links. After all the trials Tbeezi has faced, he still
        carries a humble, passionate and appreciative outlook in everything that
        he does. As his repertoire of music continues to grow, we began to
        understand how Tbeezi’s story came into fruition.
      </p>

      <p>
        Before being known as Tbeezi, in the early stages of his music career
        Tbeezi’s name wasn’t Tbeezi at all. His previous name was “I Am Music,”
        dissatisfied with the name, due to its generalized nature the artist
        formerly changed his alias to Tbeezi. In the process he encountered some
        criticism from those around him for the moniker. Tbeezi, a strong-minded
        individual, was adamant on keeping this new name. On the contrary, why
        did the artist call himself Tbeezi? Well the answer is simple, Beezi is
        a nickname related to the artist government name and is still related to
        his previous stage name. Thus Tbeezi was formed.
      </p>
      {/* <div className="tip tip-right">
        <p>
          This is a story about humble beginnings told by{" "}
          <a href="https://www.instagram.com/soirilus_/">Soirilus</a>
        </p>
      </div> */}
      <blockquote>
        <p>"God gives His toughest battles to his strongest soldiers"</p>
      </blockquote>
      <div className="tip tip-right">
        <a href="https://open.spotify.com/album/5QEptrmQaSAaPpJRAR0SEk?si=0S0Xp7R6Q9CqTIJxghGzdg">
          <img
            src="https://res.cloudinary.com/dtxylaqlc/image/upload/v1609852838/tbeezi_theblackone_y0zpg3.jpg"
            alt="TBEEZI The Black One Artwork"
          />
        </a>

        <figcaption>
          {/* New HardNard album <i>Hard</i> */}
          <i>The Black One</i>
        </figcaption>
        <p>
          Listen to <strong>TBEEZI's</strong> new album{" "}
          <em>
            <a href="https://www.youtube.com/channel/UC59nWOrCeJu6Lq6Y76zdfDQ/featured">
              <strong>The Black One </strong>
            </a>
          </em>{" "}
          on{" "}
          <a href="https://www.youtube.com/channel/UC59nWOrCeJu6Lq6Y76zdfDQ/featured">
            YouTube
          </a>
        </p>
      </div>
      <p>
        Tbeezi, was born into a household with five other siblings and a single
        mother. His father was absent the majority of the time and only visited
        when the need arose. Growing up, Tbeezi felt like the black sheep of the
        family, due to his introverted nature, but never took any of his
        family’s personal gripes against him seriously. The artist came to terms
        with his reality after witnessing the hardships his mother had to endure
        while carrying the responsibility to raise six children. Although his
        father was barely present, he only appeared when the artist was getting
        in trouble in his adolescent years. The punishment Tbeezi’s father would
        impose on him would be to sit in a corner and read the dictionary for a
        long period of time. At the moment, the disciplinary actions his father
        took felt redundant to Tbeezi, but this “punishment” served a greater
        purpose by allowing Tbeezi to fall in love with reading and learning new
        words, which eventually helped him develop his lyrically ability.
        Although, he wished his father was more present in his life, he couldn’t
        pin any blame to him, due to the fact, he didn’t know the situation his
        father was in that correlated to him not being around his family more.
      </p>
      {/* <figure> */}
      <img
        src="https://res.cloudinary.com/dtxylaqlc/image/upload/v1609821209/DSC07716_e1ccsg.jpg"
        alt="Big Ass"
      />
      <figcaption>The Black One</figcaption>
      {/* </figure> */}
      <p>
        Despite witnessing the disadvantages of his own upbringing. Tbeezi is
        currently a father of his own, playing an active role in his son’s life.
        Understanding the benefits of having a parental figure around; Tbeezi,
        brings his son virtually everywhere with him, whether it be the studio,
        playing ball at a local park, or eating out somewhere. Establishing that
        emotional bond with his child is extremely important to him as he wants
        to do everything in his power to provide a path of success for his son.
        As he knows the consequences of not having a parental figure around.  At
        a young age Tbeezi succumbed to life on the streets for a brief amount
        of time. His perspective on everything changed as he was shot at
        alongside his brother on his birthday, but managed to walk away
        unharmed. Now, Tbeezi uses these experiences to teach his son that there
        is more to life and that he can achieve greatness with hard work.
      </p>
      <img
        src="https://res.cloudinary.com/dtxylaqlc/image/upload/v1609821209/DSC07712_pmqlct.jpg"
        alt="Eazy"
      />
      {/* <img
        src="https://res.cloudinary.com/dtxylaqlc/image/upload/v1604155255/2D0E9C3E-0426-4176-A305-EF498BD473C2_rddugu.jpg"
        alt="Eazy"
      /> */}
      <figcaption>"Grind in my eyes"</figcaption>
      <p>
        Furthermore, the artist's lyrics contain a deeper meaning then the
        generic Hip-Hop flare of money, drugs, and women. Tbeezi emphasised that
        the lyrics he writes are about things he personally went through; from
        his harsh upbringing to his experience in the streets. Consequently,
        Tbeezi almost planned to retire from music entirely, to truly focus on
        his personal life. After releasing a music video to one of his songs,
        Tbeezi read a comment someone posted on the video about how his music
        helped them get through a tough time in their life. Seeing this comment
        ignited a newfound inspiration that rekindled Tbezzi’s passion to create
        music again, as he knew he had the power to change the lives of many.
      </p>
      <figure>
        <img
          src="https://res.cloudinary.com/dtxylaqlc/image/upload/v1609821209/DSC07677_q9g2bj.jpg"
          alt="Big Ass"
        />

        <figcaption>Posted up, all white</figcaption>
      </figure>

      <p>
        Cities like Atlanta, New York, and Los Angeles have benefited over the
        years with their outstanding networking capabilities. As the Central
        Florida rap scene continues to develop in front of our eyes, Tbeezi has
        expressed his views on the political side of things. Tbeezi stated that
        artists should support each other more often to highlight each other’s
        talents and build that pipeline of success in Central Florida. One
        person Tbeezi shows a lot of respect to in this regard is Sevyn
        Streeter, a Central Florida native, who granted Tbeezi the opportunity
        to perform at Love, Peace, and Unity concert in Downtown Haines City,
        with other major artists and producers spectating the moment. 
      </p>
      <div className="tip tip-left">
        <a href="https://soundcloud.com/eazyffte/eazy-0-12-ft-tbeezi">
          <img
            src="https://res.cloudinary.com/dtxylaqlc/image/upload/v1609862957/0-12artwork_tkc2q1.png"
            alt="0-12 Artwork"
          />
        </a>

        <figcaption>
          {/* New HardNard album <i>Hard</i> */}
          <i>0-12</i>
        </figcaption>
        <p>
          <strong>TBEEZI & Eazy's</strong> new track{" "}
          <em>
            <a href="https://soundcloud.com/eazyffte/eazy-0-12-ft-tbeezi">
              <strong>0-12</strong>
            </a>
          </em>{" "}
          only at{" "}
          <a href="http://ffteblog.com/">
            <strong>FFTEBLOG.COM</strong>
          </a>
        </p>
      </div>
      <p>
        One of the many things that makes Tbeezi a unique artist is his
        willingness to remain as an independent artist. Tbeezi doesn’t want to
        sign with a label as it would strip him from his freedom to manage and
        own his music. Instead the artist opted out to remain independent and
        work with other independent brands such as KneeDeep and FFTE, having an
        established relationship with them.
      </p>

      <p>
        In the end, Tbeezi is a Central Florida artist with a unique sound and a
        dope message of self empowerment. His lyrics captivate the person behind
        the mic and truly highlights his story and all the things he’s been
        through. With his humbled and passionate outlook on life, Tbeezi’s sound
        will continue to expand its reach and impact those who hear his music.
      </p>

      <figure>
        <img
          src="https://res.cloudinary.com/dtxylaqlc/image/upload/v1609821209/DSC07682_kllsog.jpg"
          alt="TBEEZI"
        />

        <figcaption>
          <em>Linked</em>
        </figcaption>
      </figure>
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
          Links to reach TBEEZI:
          <br />
          <br />
          <a href="https://www.instagram.com/tbeezi_/">
            <FiInstagram /> Instagram: @tbeezi_
          </a>
          <br />
          <a href="https://twitter.com/Tbeezi_The_Goat">
            <FiTwitter /> Twitter: @Tbeezi_The_Goat
          </a>
          <br />
          <a href="https://www.facebook.com/hardn">
            <FiFacebook /> Facebook: Tbeezi TheGoat
          </a>
        </p>
      </blockquote>

      <blockquote>
        <p>
          Next Up:
          <br />
          <Link to="/hardnard">Hard Nard: Knee Deep</Link>
        </p>
      </blockquote>
    </article>
  </>
);

export default IndexPage;
