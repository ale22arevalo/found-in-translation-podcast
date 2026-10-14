import React from "react"
import { StaticImage } from "gatsby-plugin-image"

// Guest illustrations, keyed by episode slug. StaticImage needs a literal src,
// so each one is spelled out here rather than built from the episodes data.
const illustrations = {
  tim: () => <StaticImage className="g-aiImg" src="../images/tim/tim_illo.png" alt="Illustration of Tim in sunglasses and a tuxedo with a bow tie" width={569} />,
  tania: () => <StaticImage className="g-aiImg" src="../images/tania/tania_illo.png" alt="Illustration of Tania with long blond hair in a navy jacket, with family photos on her shirt" width={569} />,
  cristina: () => <StaticImage className="g-aiImg" src="../images/cristina/cristina_illo.png" alt="Illustration of Cristina smiling in a red top, with travel photos in the sunglasses on her head" width={569} />,
  boying: () => <StaticImage className="g-aiImg" src="../images/boying/boying_illo.png" alt="Illustration of Boying with long brown hair, her shirt showing a childhood photo of herself" width={569} />,
  jared: () => <StaticImage className="g-aiImg" src="../images/jared/jared_illo.png" alt="Illustration of Jared smiling in aviator sunglasses that reflect family photos" width={569} />,
  rachel: () => <StaticImage className="g-aiImg" src="../images/rachel/rachel.webp" alt="Illustration of Rachel smiling, her top filled with family photos" width={569} />,
  michael: () => <StaticImage className="g-aiImg" src="../images/michael/michael.webp" alt="Illustration of Michael with a red flower in his hair, his shirt filled with family photos" width={569} />,
  cy: () => <StaticImage className="g-aiImg" src="../images/cynthia/cynthia.webp" alt="Illustration of Cynthia in glasses, her shirt showing photos of her with her mom" width={569} />,
  fa: () => <StaticImage className="g-aiImg" src="../images/fareeha/fareeha.webp" alt="Illustration of Fareeha smiling, her top filled with family photos" width={569} />,
}

export default illustrations
