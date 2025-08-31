import React from 'react';
import { Link } from 'react-router-dom';

const BlogSection: React.FC = () => {
    const blogPosts = [
        {
            id: 1,
            title: "The Complete History of Morse Code: From Telegraph to Modern Communication",
            excerpt: "Discover the fascinating origins of Morse code, its inventor Samuel Morse, and how this revolutionary communication system changed the world forever.",
            date: "August 31, 2025",
            readTime: "5 min read",
            keywords: ["morse code history", "samuel morse", "telegraph invention", "communication history"],
            content: `
        <h2>The Birth of Morse Code</h2>
        <p>Morse code, the revolutionary communication system that uses dots and dashes to represent letters and numbers, was developed in the early 19th century. Samuel F.B. Morse, along with Alfred Vail and Leonard Gale, created this system that would transform global communication.</p>

        <h3>The Telegraph Revolution</h3>
        <p>The first successful demonstration of the electric telegraph occurred in 1838, when Morse and his colleagues sent a message over a 10-mile wire. The famous message "What hath God wrought" marked the beginning of instant long-distance communication.</p>

        <h3>International Standardization</h3>
        <p>By the late 19th century, Morse code became the international standard for telegraph communication. The International Telecommunication Union (ITU) standardized the code in 1865, ensuring global compatibility.</p>

        <h3>Morse Code Today</h3>
        <p>While largely replaced by digital communication, Morse code remains essential in amateur radio, aviation, maritime communication, and emergency situations. It's also used in accessibility tools and continues to fascinate communication enthusiasts worldwide.</p>
      `
        },
        {
            id: 2,
            title: "How to Learn Morse Code: A Complete Beginner's Guide",
            excerpt: "Master Morse code with our step-by-step learning guide. From basic letters to advanced techniques, learn the skills used by amateur radio operators worldwide.",
            date: "August 31, 2025",
            readTime: "7 min read",
            keywords: ["learn morse code", "morse code tutorial", "beginners guide", "amateur radio"],
            content: `
        <h2>Getting Started with Morse Code</h2>
        <p>Learning Morse code is easier than you think! With consistent practice and the right approach, anyone can master this timeless communication method. Our comprehensive guide will take you from complete beginner to confident Morse code operator.</p>

        <h3>Step 1: Master the Basics</h3>
        <p>Start with the most common letters: E (.), T (-), I (..), A (.-), N (-.), M (--), D (-..), R (.-.), K (-.-), S (...), U (..-), W (.--)</p>

        <h3>Step 2: Learn Numbers and Punctuation</h3>
        <p>Once comfortable with letters, add numbers (0 = -----, 1 = .----, etc.) and common punctuation marks like period (.-.-.-) and comma (--..--).</p>

        <h3>Step 3: Practice Timing</h3>
        <p>The key to Morse code proficiency is consistent timing. A dash is three times longer than a dot, with equal spacing between elements of the same letter.</p>

        <h3>Step 4: Build Speed Gradually</h3>
        <p>Start slow and focus on accuracy. Gradually increase your speed as you become more comfortable. Most amateur radio operators aim for 13-15 words per minute.</p>

        <h3>Essential Practice Tips</h3>
        <ul>
          <li>Practice daily for 15-30 minutes</li>
          <li>Use our free online converter to check your work</li>
          <li>Join amateur radio communities for support</li>
          <li>Learn the phonetic alphabet alongside Morse code</li>
        </ul>
      `
        },
        {
            id: 3,
            title: "Morse Code in Modern Times: Applications and Uses Today",
            excerpt: "Explore how Morse code continues to play vital roles in aviation, maritime communication, emergency services, and amateur radio in the digital age.",
            date: "August 31, 2025",
            readTime: "6 min read",
            keywords: ["modern morse code", "amateur radio", "aviation communication", "emergency signals"],
            content: `
        <h2>Morse Code's Enduring Relevance</h2>
        <p>Despite the proliferation of digital communication technologies, Morse code remains a critical communication tool in several modern applications. Its simplicity, reliability, and low bandwidth requirements make it indispensable in certain scenarios.</p>

        <h3>Aviation and Navigation</h3>
        <p>Morse code is still used in aviation for:
        <ul>
          <li>Non-directional beacons (NDBs) for aircraft navigation</li>
          <li>Airport identification signals</li>
          <li>Emergency locator transmitters (ELTs)</li>
          <li>Military aviation communications</li>
        </ul></p>

        <h3>Maritime Communication</h3>
        <p>At sea, Morse code serves as a backup communication method:
        <ul>
          <li>Ship-to-shore distress signals</li>
          <li>Navigation aids and buoys</li>
          <li>Emergency position-indicating radio beacons (EPIRBs)</li>
          <li>Search and rescue operations</li>
        </ul></p>

        <h3>Amateur Radio (Ham Radio)</h3>
        <p>Amateur radio operators worldwide use Morse code for:
        <ul>
          <li>Contesting and DX communication</li>
          <li>Emergency communication during disasters</li>
          <li>Low-power, long-distance communication</li>
          <li>Learning and skill development</li>
        </ul></p>

        <h3>Accessibility and Assistive Technology</h3>
        <p>Morse code finds applications in assistive technology:
        <ul>
          <li>Communication devices for people with severe disabilities</li>
          <li>Eye-tracking systems for computer control</li>
          <li>One-switch communication interfaces</li>
        </ul></p>

        <h3>The Future of Morse Code</h3>
        <p>While digital technologies dominate modern communication, Morse code's simplicity ensures its continued relevance. Its ability to work with minimal equipment and in challenging conditions makes it a valuable skill for emergency preparedness and specialized communication needs.</p>
      `
        },
        {
            id: 4,
            title: "Famous Morse Code Messages That Changed History",
            excerpt: "From the Titanic's distress call to historic diplomatic communications, discover the most famous Morse code messages that shaped world events.",
            date: "August 31, 2025",
            readTime: "4 min read",
            keywords: ["famous morse code", "historic messages", "SOS signal", "telegraph history"],
            content: `
        <h2>Iconic Morse Code Transmissions</h2>
        <p>Throughout history, Morse code has carried messages that changed the course of events, saved lives, and shaped international relations. Here are some of the most famous Morse code messages ever sent.</p>

        <h3>The First Telegraph Message</h3>
        <p>On May 24, 1844, Samuel Morse sent the historic message "What hath God wrought" from Washington D.C. to Baltimore, Maryland. This 10-mile transmission proved the viability of electric telegraphy and marked the beginning of instant long-distance communication.</p>

        <h3>The Titanic's SOS</h3>
        <p>The RMS Titanic's distress signal on April 14, 1912, brought worldwide attention to the SOS emergency code (... --- ...). While the ship carried wireless telegraph equipment, the Morse code tradition continued with this famous transmission that led to the rescue of 705 survivors.</p>

        <h3>World War II Communications</h3>
        <p>During World War II, Morse code played crucial roles in:
        <ul>
          <li>Resistance communications in occupied territories</li>
          <li>Naval battle coordination</li>
          <li>Espionage and intelligence operations</li>
          <li>Diplomatic communications</li>
        </ul></p>

        <h3>The Zimmermann Telegram</h3>
        <p>In 1917, the Zimmermann Telegram, a secret diplomatic communication sent in Morse code, helped draw the United States into World War I. The message proposed a military alliance between Germany and Mexico against the U.S.</p>

        <h3>Apollo 11 and Space Communication</h3>
        <p>Even in the space age, Morse code found its place. Apollo 11 astronauts used Morse code signals for various purposes during their historic moon mission, demonstrating the code's versatility across different environments.</p>

        <h3>Modern Emergency Signals</h3>
        <p>Today, Morse code continues to save lives through:
        <ul>
          <li>Emergency locator transmitters (ELTs) in aircraft</li>
          <li>Emergency position-indicating radio beacons (EPIRBs) at sea</li>
          <li>Search and rescue operations worldwide</li>
        </ul></p>
      `
        },
        {
            id: 5,
            title: "Morse Code for Amateur Radio: Essential Skills for Ham Operators",
            excerpt: "Essential Morse code skills for amateur radio operators. Learn the codes, techniques, and best practices used in the ham radio community worldwide.",
            date: "August 31, 2025",
            readTime: "8 min read",
            keywords: ["amateur radio", "ham radio", "morse code license", "CW operation"],
            content: `
        <h2>Morse Code in Amateur Radio</h2>
        <p>Morse code, often called "CW" (Continuous Wave) in radio circles, remains a beloved and essential mode of communication among amateur radio operators worldwide. Its efficiency, reliability, and ability to cut through interference make it invaluable for ham radio enthusiasts.</p>

        <h3>Why Learn Morse Code for Ham Radio?</h3>
        <p>Morse code offers several advantages in amateur radio:
        <ul>
          <li><strong>Efficiency:</strong> CW signals can be sent with very low power</li>
          <li><strong>Reliability:</strong> Works well in poor conditions and interference</li>
          <li><strong>Global Reach:</strong> Can be copied over vast distances with minimal equipment</li>
          <li><strong>Skill Building:</strong> Develops listening and concentration skills</li>
          <li><strong>Community:</strong> Connects you with a dedicated worldwide community</li>
        </ul></p>

        <h3>Morse Code Requirements for Ham Radio Licenses</h3>
        <p>While many countries have eliminated Morse code requirements for amateur radio licenses, some still require it for certain license classes. Even where not required, learning CW enhances your operating capabilities and opens new communication possibilities.</p>

        <h3>Essential Morse Code for Ham Radio</h3>
        <p>Beyond the basic alphabet, ham radio operators commonly use:
        <ul>
          <li><strong>Q Signals:</strong> QTH (location), QRZ (who is calling me?), QRM (interference)</li>
          <li><strong>Abbreviations:</strong> 73 (best regards), 88 (love and kisses), WX (weather)</li>
          <li><strong>Procedural Signals:</strong> K (go ahead), AR (end of message), SK (end of contact)</li>
        </ul></p>

        <h3>Getting Started with CW</h3>
        <p>To begin your Morse code journey for ham radio:
        <ol>
          <li>Learn the basic alphabet using our converter tool</li>
          <li>Practice sending with a straight key or electronic keyer</li>
          <li>Listen to CW signals on the amateur bands</li>
          <li>Join CW practice nets and contests</li>
          <li>Participate in amateur radio clubs and events</li>
        </ol></p>

        <h3>CW Operating Tips</h3>
        <p>Successful CW operation requires:
        <ul>
          <li>Proper keying technique for clear, readable signals</li>
          <li>Understanding of timing and spacing standards</li>
          <li>Knowledge of common abbreviations and procedures</li>
          <li>Patience and persistence in building skills</li>
        </ul></p>

        <h3>The Future of CW in Amateur Radio</h3>
        <p>While digital modes are increasingly popular, Morse code continues to thrive in amateur radio. Its simplicity, effectiveness, and the satisfaction of skilled operation ensure its place in the hobby for generations to come.</p>
      `
        }
    ];

    return (
        <section id="blog" className="py-16 bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
                        Morse Code Blog
                    </h2>
                    <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                        Discover the fascinating world of Morse code through our comprehensive articles.
                        Learn about its history, applications, and how to master this timeless communication method.
                    </p>
                </div>

                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {blogPosts.map((post) => (
                        <Link
                            key={post.id}
                            to={`/blog/${post.id}`}
                            className="block bg-white dark:bg-gray-800 rounded-xl shadow-sm overflow-hidden transition-all duration-200 hover:shadow-lg hover:scale-105"
                        >
                            <article className="p-6 h-full">
                                <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-3">
                                    <span>{post.date}</span>
                                    <span className="mx-2">•</span>
                                    <span>{post.readTime}</span>
                                </div>

                                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                                    {post.title}
                                </h3>

                                <p className="text-gray-600 dark:text-gray-300 mb-4">
                                    {post.excerpt}
                                </p>

                                <div className="flex flex-wrap gap-2 mb-4">
                                    {post.keywords.map((keyword, index) => (
                                        <span key={index} className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded-full text-xs">
                                            {keyword}
                                        </span>
                                    ))}
                                </div>

                                <div className="text-blue-600 dark:text-blue-400 font-medium">
                                    Read More →
                                </div>
                            </article>
                        </Link>
                    ))}
                </div>

                {/* SEO Content Section */}
                <div className="mt-16 bg-white dark:bg-gray-800 rounded-xl shadow-sm p-8 transition-colors duration-200">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                        Learn More About Morse Code
                    </h3>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div>
                            <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Popular Topics</h4>
                            <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                                <li>• Morse Code Alphabet and Numbers</li>
                                <li>• How to Send and Receive Morse Code</li>
                                <li>• Morse Code in Emergency Situations</li>
                                <li>• Morse Code for Amateur Radio Operators</li>
                                <li>• The Science Behind Morse Code Timing</li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Quick Facts</h4>
                            <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                                <li>• Morse code was invented in 1837</li>
                                <li>• The SOS signal is ... --- ...</li>
                                <li>• Morse code is still used in aviation and maritime</li>
                                <li>• Learning Morse code improves cognitive skills</li>
                                <li>• It's the most efficient text communication method</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BlogSection;
