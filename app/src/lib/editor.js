import { basicSetup, EditorView } from 'codemirror'
import { vim } from "@replit/codemirror-vim"

const maze = `l   j                                     
══╗    ╔════════════════╦═════════╗
  ║    ║                ║      9j ║     """ Using these keys instead of the arrows
  ║    ║    ╔══════╗    ║         ║     """ keeps your hands on the home keys
  ║    ║    ║      ║    ║    ║    ║
  ║    ║    ║      ║    ║    ║    ║
  ║    ║    ╚══════╣    ║    ║    ║
  ║    ║         h ║    ║    ║    ║
  ║    ╚═══════    ║         ║    ║
  ║ l            k ║      7k ║    ║
  ╚════════════════╩═════════╝     
                                x


""" Vim is "MODAL"
""" 
"""   - Move around
"""   - Edit


""" Use i and ESC to insert the missing letters

Jnuary February arch Apil


""" Uppercase I inserts at the beginning of a line. Insert "May"

June July August


""" Uppercase A inserts at the end of a line. Change "Xmas" for "December"

September October November Xmas


""" Some of these lines are in the wrong list. Move them with dd and p

Favorite things at work
  - Company off-site
  - TabaPay
  - Acronyms
  - YAML
  - All-hands
  - Surveys

Least favorites
  - Auditors
  - Lunch and learn
  - Office snacks
  - Docker


""" Add all these lines to the list above using d3d (and p)

  - "Have you checked Slab?"
  - "I think that's in a Slab document somewhere."
  - "Try Slab."


""" D and C will delete/change the rest of the line

William Shakespeare Jane Austen Charles Dickens Mark Twain
Leo Tolstoy Fyodor Dostoevsky George Orwell Ernest Hemingway
Charlotte Brontë Emily Brontë Edgar Allan Poe Victor Hugo
Nathaniel Hawthorne H.G. Wells Mary Shelley Oscar Wilde
Jules Verne Joseph Conrad Thomas Hardy Herman Melville


""" Look for 12345 by typing /12345 and ENTER

87563 94265 47813 29876 50192 38765 12039 23487 66126 36688 12387 68765
87165 23497 16530 98746 47822 85674 32195 34516 52300 37645 53929 89183
87630 91458 76320 49186 75430 12765 98342 10859 28592 85928 59212 36575
83409 57612 38746 29381 75469 20183 76459 20138 75649 20387 51649 28735
82765 40293 87516 42012 34551 24876 50918 27350 46129 83754 62109 83756
01786 49203 81746 59203 12345 79210 38765 49201 78463 09582 74612 93587
02987 56314 33213 76540 19287 35046 12983 75402 19876 54012 77875 60412
76520 41987 65401 92785 64098 12376 50492 13875 60491 23876 50921 87654


""" Search for 31415 by placing the cursor on top of the number and pressing *

87563 94265 47813 29876 50192 38765 12039 23487 66126 36688 12387 68765
87165 23497 16530 98746 31415 85674 32195 34516 52300 37645 53929 31415
87630 91458 76320 49186 75430 12765 98342 10859 28592 85928 59212 36575
83409 57612 38746 29381 75469 20183 76459 20138 75649 20387 51649 28735
82765 40293 87516 42012 34551 24876 50918 27350 46129 83754 62109 83756
01786 49203 81746 59203 87641 79210 38765 49201 78463 09582 74612 93587
02987 56314 31415 76540 19287 35046 12983 75402 19876 54012 31415 60412
76520 41987 65401 92785 64098 12376 50492 13875 60491 23876 50921 87654


""" Nouns and verbs...
""" 
"""   - dw will delete a whole word
"""   - d5w will delete 5 words
"""   - cw is the same, but changes to insert mode

William Shakespeare Jane Austen Charles Dickens Mark Twain
Leo Tolstoy Fyodor Dostoevsky George Orwell Ernest Hemingway
Charlotte Brontë Emily Brontë Edgar Allan Poe Victor Hugo
Nathaniel Hawthorne H.G. Wells Mary Shelley Oscar Wilde
Jules Verne Joseph Conrad Thomas Hardy Herman Melville


""" One very handy key: .
"""
""" Replace all 31415 with dashes
"""
"""   - Use * to search
"""   - cw to change the "word"
"""   - n and . (next and repeat)


87563 94265 47813 29876 50192 38765 12039 23487 66126 36688 12387 68765
87165 23497 16530 98746 31415 85674 32195 34516 52300 37645 53929 31415
87630 91458 76320 49186 75430 12765 98342 10859 28592 85928 59212 36575
83409 57612 38746 29381 75469 20183 76459 20138 75649 20387 51649 28735
82765 40293 87516 42012 34551 24876 50918 27350 46129 83754 62109 83756
01786 49203 81746 59203 87641 79210 38765 49201 78463 09582 74612 93587
02987 56314 31415 76540 19287 35046 12983 75402 19876 54012 31415 60412
76520 41987 65401 92785 64098 12376 50492 13875 60491 23876 50921 87654


""" Time for golf. Using the least number of keystrokes...

id,name,date of birth,street,postcode,city,profession,employer
0234567890,John Smith,1980-05-15,Main Street,02345,Tokyo,Engineer,ABC Engineering
2345678901,Anna Kim,1992-08-22,Park Avenue,45678,Seoul,Doctor,XYZ Hospital
3456789012,Mohammad Khan,1975-02-10,Green Road,78901,Karachi,Teacher,XYZ School
4567890123,Wei Chen,1988-12-07,Sunrise Street,23456,Shanghai,Software Developer,Global Tech
5678901234,Sara Gupta,1996-03-30,Mountain View,34567,Beijing,Accountant,Financial Services Ltd
6789002345,Hiroshi Sato,1983-07-18,Beach Road,56789,Taipei,Architect,Design Associates
7890023456,Lin Li,1979-09-25,River Side,67890,Bangkok,Marketing Manager,Asia Marketing Group
8900234567,Nina Patel,1990-11-12,Forest Lane,02345,Mumbai,Graphic Designer,Design Creations
9002345678,Ahmed Hussein,1987-06-04,Lake View,2!456,Istanbul,Chef,Spice Delight
7081963245,Ahmed Khan,1984-11-29,Blue River Road,45678,Dhaka,Teacher,Sunshine School
1029384756,Lisa Tan,199!-04-27,Hilltop Avenue,78901,Singapore,Financial Analyst,Global Investments
9876543210,Sanjay Sharma,1982-!0-15,Maple Lane,45678,Mumbai,Journalist,The Times
1357924680,Maya Nagano,1974-08-09,Sakura Street,34567,Seoul,Doctor,Sakura Hospital
8642091735,Kim Sung,1995-12-03,Sunset Road,23456,Tokyo,Engineer,Tech Solutions Inc
2468013579,Mohammed Ali,1986-06-!8,Orchard Avenue,02345,Karachi,Architect,Design Works
5793124680,Mary Wu,1977-02-23,Cherry Blossom Lane,56789,Shanghai,Marketing Manager,Asia Marketing Group
3147209875,Yuki Nakamura,1993-05-06,Pagoda Street,67890,Taipei,Software Developer,Global Tech
2039485761,Aditi Singh,1989-09-14,Tempura Lane,34567,Beijing,Accountant,Financial Services Ltd
7081963245,Ahmed Khan,1984-11-29,Blue River Road,45678,Dhaka,Teacher,Sunshine School
5928374610,Sophia Kim,1976-03-12,Golden Temple Street,02345,Seoul,Graphic Designer,Design Creations



`

//1. Find all people living in Tokyo
//2. Nobody has been hurt, but there's been an earthquake in Tokyo. Remove the records of people that live there
//3. Replace all instances of Road with Rd
//4. It turns out that Sanjay has the same job and employer as Maya. Fix this line
//5. Find the duplicate line and delete it
//6. Bonus: lowercase r will replace a character. Replace all the exclamation points with the number 1

const listener = () => {
  let maxLine = 0

  return EditorView.updateListener.of(() => {
    maxLine = Math.max(view.state.doc.lineAt(view.state.selection.main.head).number, maxLine)

    display(maxLine)
  })
}

const view = new EditorView({
  doc: maze,
  extensions: [
    vim(),
    basicSetup,
    listener(),
  ],
  parent: document.querySelector('#editor'),
})

view.focus()