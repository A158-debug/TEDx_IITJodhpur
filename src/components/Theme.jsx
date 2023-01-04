import React from 'react'

const Theme = () => {
  return (
    <>
     <section>
        <div className="container teaser" id="teaser">
          <div className="row">
            <h1 className="my-4 text-center teaser__content">
              <span className="text-white"> Teaser Video </span>: The New
              Dimension
            </h1>
            <div className="col-md-6">
              <div className="video-responsive">
                <iframe
                  width="853"
                  height="480"
                  src={`https://www.youtube.com/embed/IEjD1TcXsoA`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  title="Embedded youtube"
                />
              </div>
            </div>
            <div className="col-md-6">
              <p>To unlock the untapped opportunities and experience an unrestricted rush? As the new level enters play, there is a dynamic, fiery, and innovative energy in the air encouraging us to see beyond what is to what it may be! TEDxIITJodhpur is here to transport you into a thrilling NEW DIMENSION and open your eyes to the possibilities of anything we can imagine, but outside the box!</p>

              <p>We are here to dispel the notion of limitations, to break down the boundaries imposed by the current dimensions of reality, and to fully realize our potential. To learn from the mistakes of the past, to persevere through the most difficult challenges, and to bring about change so that success becomes more than just a tale, and failure acts as a spark to rekindle rather than extinguish the flame of desire. Where every breath feels worthwhile and the future is constantly overwhelming but undetermined, untitled, and unbound!</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Theme