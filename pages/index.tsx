import styles from '../styles/Home.module.css'
import CustomCarousel from '../src/components/carousel/carousel'
import Textwithcta from '../src/components/textwithcta/textwithcta';
import Header from '../src/components/header/head'

export default function Home() {
  return (
    <div className={styles.container}>
      <Header></Header>
      <CustomCarousel></CustomCarousel>
      <Textwithcta title={'About Product'} body={`Get strong and lustrous hair with vriksham hair oil 
11 herbs With Comb Applicator. The built-in comb applicator helps detangle hair and spread the oil evenly onto each strand. This hair oil works to condition your weak strands and moisturize your scalp. Light, non-sticky hair oil can be used on very curly and dry strands after shampoo as a serum and hair protector. Regular use helps to improve hair texture and strengthen the strands.
<ul><li>
Comes with a built-in applicator comb: This comb applicator helps spread the oil evenly and detangles the hair to avoid hair breakage .Oil is a non-sticky, non-greasy hair oil for silkier & stronger hair and with its fast absorption, makes it perfect for the hair moisturisation. It can be used for scalp treatment also.
</li><li>
This oil can be used on any type of hair, be it curly, straight, textured, thick, thin, fine, coarse, colour treated, etc. It can also be used on any type of scalp.
</li></ul>`}></Textwithcta>
    </div>
  )
}
