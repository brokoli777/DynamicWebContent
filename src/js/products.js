/**
 * products.js
 *
 * The store's products are defined as an Array of product Objects.
 * Each product Object includes the following properties:
 *
 *  - id: String, a unique product identifier (e.g., "P1", "P2")
 *  - title: String, a short name for the product (e.g., "Gingerbread Cookie")
 *  - description: String, a description of the product
 *  - price: Number, the unit price of the item in whole cents (e.g., 100 = $1.00, 5379 = $53.79)
 *  - discontinued: Boolean, whether or not the product has been discontinued
 *  - categories: Array, the category id or ids to which this product belongs (e.g., ["c1"] or ["c1", "c2"])
 */

window.products = [
  /*
    {
      id: "P1",
      title: "Title 1",
      description: "Description 1...",
      price: 199,
      discontinued: false,
      categories: ["c1"]
    },
  */
    {
      id: "P1C1",
      title: "The Proposal by Jasmine Guillory (2018)",
      description: "The author of The Wedding Date serves up a novel about what happens when a public proposal doesn't turn into a happy ending",
      price: 20.50,
      discontinued: false,
      categories: ["c1"],
      imageUrl: "./TheProposalBookImg.jpg"
    },
    {
      id: "P2",
      title: "Bared to You by Sylvia Day (2014)",
      description: "Gideon Cross came into my life like lightning in the darkness...",
      price: 59,
      discontinued: false,
      categories: ["c1"],
      imageUrl: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1433411511l/20448515._SY475_.jpg"
    },
    {
      id: "P3",
      title: "Delta of Venus by Anais Nin (1977)",
      description: "From influential feminist artist and essayist Anais Nin, Delta of Venus is one of the most important works of modern female erotica ",
      price: 19,
      discontinued: false,
      categories: ["c1"],
      imageUrl: "https://pictures.abebooks.com/isbn/9783426606674-us-300.jpg"
    },
    {
      id: "P4",
      title: "Love at First Like: A Novel by Hannah Orenstein (2019)",
      description: "Eliza Roth and her sister Sophie co-own a jewelry shop in Brooklyn...",
      price: 59,
      discontinued: false,
      categories: ["c1"],
      imageUrl: "https://images-na.ssl-images-amazon.com/images/I/71E4sClCfuL.jpg"
    },
    {
      id: "P5",
      title: "Outlander by Diana Gabaldon (1992)",
      description: "Outlander (published in the United Kingdom as Cross Stitch) is a historical fantasy novel by Diana Gabaldon first published in 1991.",
      price: 19,
      discontinued: false,
      categories: ["c1"],
      imageUrl: "https://images-na.ssl-images-amazon.com/images/I/91xD+7HtVfL.jpg"
    },
    {
      id: "P6",
      title: "Beautiful World, Where Are You by Sally Rooney (2021)",
      description: "Beautiful World, Where Are You is a novel by Irish author Sally Rooney. It was released on 7 September 2021. ",
      price: 34,
      discontinued: false,
      categories: ["c1"],
      imageUrl: "https://media.npr.org/assets/img/2021/08/27/810hqnd6-es_custom-42c9ed6ce1a23ebaa07018f01fb8e3913c4e1af0.jpg"
    },
    {
      id: "P7",
      title: "The Notebook by Nicholas Sparks (1996)",
      description: "The Notebook is a 1996 romantic novel by American novelist Nicholas Sparks. ",
      price: 56.40,
      discontinued: false,
      categories: ["c1"],
      imageUrl: "https://i.ebayimg.com/images/g/ho0AAOSwq7tgAFo8/s-l640.jpg"
    },
    //=============
    {
      id: "P8",
      title: "Harvest Home, by Thomas Tryon",
      description: "Harvest Home is a 1973 psychological horror novel by American writer Thomas Tryon. ",
      price: 70.03,
      discontinued: false,
      categories: ["c2"],
      imageUrl: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1328585596l/816085.jpg"
    },
    {
      id: "P9",
      title: "The Auctioneer, by Joan Samson",
      description: "One of the finest and best-selling horror novels of the 1970s returns at last to chill a new generation of readers",
      price: 48,
      discontinued: false,
      categories: ["c2"],
      imageUrl: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1578187797l/930260.jpg"
    },
    {
      id: "P10",
      title: "Something Wicked This Way Comes, by Ray Bradbury",
      description: "Something Wicked This Way Comes is a 1962 dark fantasy novel by Ray Bradbury",
      price: 34,
      discontinued: false,
      categories: ["c2"],
      imageUrl: "./SomethingWickedBookImg.jpg"
    },
    {
      id: "P11",
      title: "Dark Valley, by Joe Donnelly",
      description: "A town locked down. Police are hunting a mad, bad stranger whose shocking deeds have put fear into the hearts of every mother; fear for their children.",
      price: 32.20,
      discontinued: false,
      categories: ["c2"],
      imageUrl: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1394347357l/2255307.jpg"
    },
    {
      id: "P12",
      title: "The Monk, by Matthew Lewis",
      description: "The Monk: A Romance is a Gothic novel by Matthew Gregory Lewis, published in 1796. ",
      price: 33,
      discontinued: true,
      categories: ["c2"],
      imageUrl: "https://m.media-amazon.com/images/I/61h-Q4UfH7L.jpg"
    },
    {
      id: "P13",
      title: "The Bloody Chamber by Angela Carter",
      description: "The Bloody Chamber is a collection of short fiction by English writer Angela Carter.",
      price: 20.10,
      discontinued: false,
      categories: ["c2"],
      imageUrl: "https://images-na.ssl-images-amazon.com/images/I/914-0zZFhPL.jpg"
    },
    {
      id: "P14",
      title: "Carrie by Stephen King",
      description: "Carrie is a horror novel by American author Stephen King.",
      price: 11,
      discontinued: false,
      categories: ["c2"],
      imageUrl: "https://images-na.ssl-images-amazon.com/images/I/91P7rIp-ayL.jpg"
    },
    //=====================================
    {
      id: "P15",
      title: "Frankenstein, by Mary Shelley (1818)",
      description: "Frankenstein; or, The Modern Prometheus is an 1818 novel written by English author Mary Shelley.",
      price: 38,
      discontinued: false,
      categories: ["c3"],
      imageUrl: "https://m.media-amazon.com/images/I/41qNt+dfjKL.jpg"
    },
    {
      id: "P16",
      title: "Foundation, by Isaac Asimov (1951)",
      description: "The Foundation series is a science fiction book series written by American author Isaac Asimov. ",
      price: 29.80,
      discontinued: false,
      categories: ["c3"],
      imageUrl: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1417900846l/29579.jpg"
    },
    {
      id: "P17",
      title: "The Stars My Destination, by Alfred Bester (1957)",
      description: "The Stars My Destination is a science fiction novel by American writer Alfred Bester. ",
      price: 46.5,
      discontinued: false,
      categories: ["c3"],
      imageUrl: "https://images.gr-assets.com/books/1433671750l/333867.jpg"
    },
    {
      id: "P18",
      title: "Dune, by Frank Herbert (1965)",
      description: "Dune is a 1965 epic science fiction novel by American author Frank Herbert, originally published as two separate serials in Analog magazine.",
      price: 13,
      discontinued: false,
      categories: ["c3"],
      imageUrl: "./DuneBookImg.jpg"
    },
    {
      id: "P19",
      title: "The Left Hand of Darkness, by Ursula K. Le Guin (1969)",
      description: "The Left Hand of Darkness is a science fiction novel by U.S. writer Ursula K. Le Guin. ",
      price: 26.50,
      discontinued: false,
      categories: ["c3","c2"],
      imageUrl: "https://images-na.ssl-images-amazon.com/images/I/81EtwGcbbpL.jpg"
    },
    {
      id: "P20",
      title: "Kindred, by Octavia E. Butler (1979)",
      description: "Kindred is a novel by American writer Octavia E. Butler that incorporates time travel and is modeled on slave narratives. ",
      price: 17,
      discontinued: true,
      categories: ["c3"],
      imageUrl: "https://images-na.ssl-images-amazon.com/images/I/81KU7ZGvnZL.jpg"
    },
    {
      id: "P21",
      title: "Neuromancer, by William Gibson (1984)",
      description: "Neuromancer is a 1984 science fiction novel by American-Canadian writer William Gibson.",
      price: 24,
      discontinued: false,
      categories: ["c3","c2"],
      imageUrl: "https://jeroenthoughts.files.wordpress.com/2022/03/image011.jpg"
    }
    
];
