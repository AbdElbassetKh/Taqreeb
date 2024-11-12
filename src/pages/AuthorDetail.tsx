import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { MapPin, Calendar, Book, Users } from 'lucide-react';

const AuthorDetail = () => {
  const { id } = useParams();

  const author = {
    id,
    name: 'Ibn Taymiyyah',
    fullName: 'Taqī ad-Dīn Ahmad ibn Taymiyyah',
    arabicName: 'تقي الدين أحمد ابن تيمية',
    period: '661-728 AH (1263-1328 CE)',
    location: 'Damascus, Syria',
    image: 'https://images.unsplash.com/photo-1614849963640-9cc74b2a826f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    biography: `Sheikh ul-Islam Ibn Taymiyyah was born in Harran, Turkey in 661 AH. He and his family were forced to flee to Damascus due to the Mongol invasion. He began his studies at a very young age and memorized the Quran early in life. Known for his exceptional intelligence and remarkable memory, he completed his education by the age of 20.

He became a professor of Hanbali jurisprudence at the age of 22, and he became well-versed in all schools of jurisprudence, theology, philosophy, and Sufism. His knowledge of comparative religion, particularly Christianity, was unmatched during his time.

Throughout his life, Ibn Taymiyyah was known for his unwavering stance on following the Quran and Sunnah strictly according to the understanding of the early Muslims (Salaf). He faced numerous trials and was imprisoned several times for his beliefs, yet he continued teaching and writing even while in prison.`,
    expertise: ['Aqeedah', 'Fiqh', 'Tafsir', 'Hadith', 'Comparative Religion'],
    teachers: [
      'His father: Shihab ud-Din Abdul Halim ibn Taymiyyah',
      'Ibn Abi al-Yusr',
      'Al-Kamal ibn Abd'
    ],
    students: [
      'Ibn Qayyim al-Jawziyyah',
      'Adh-Dhahabi',
      'Ibn Kathir',
      'Al-Mizzi'
    ],
    works: [
      {
        id: 1,
        title: 'Al-Aqidah Al-Wasitiyah',
        description: 'A comprehensive exposition of Islamic creed according to Ahl us-Sunnah wal-Jamaah',
        cover: 'https://images.unsplash.com/photo-1532012197267-da84d127e765?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        year: '698 AH',
        category: 'Aqeedah'
      },
      {
        id: 2,
        title: 'Kitab ar-Radd ala al-Mantiqiyyin',
        description: 'Refutation of Greek Logic',
        cover: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        year: '721 AH',
        category: 'Philosophy'
      },
      {
        id: 3,
        title: 'Al-Jawab as-Sahih',
        description: 'A comprehensive response to Christian polemics',
        cover: 'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        year: '709 AH',
        category: 'Comparative Religion'
      }
    ]
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Author Header */}
      <div className="relative h-64 rounded-xl overflow-hidden mb-8">
        <img
          src={author.image}
          alt={author.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-8 left-8 text-white">
          <h1 className="text-4xl font-bold mb-2">{author.name}</h1>
          <p className="text-xl text-gray-200">{author.fullName}</p>
          <p className="text-xl font-arabic mt-1">{author.arabicName}</p>
        </div>
      </div>

      {/* Author Info */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Sidebar */}
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h2 className="font-semibold mb-4">Information</h2>
            <div className="space-y-4">
              <InfoItem icon={<Calendar />} label="Period" value={author.period} />
              <InfoItem icon={<MapPin />} label="Location" value={author.location} />
              <InfoItem icon={<Book />} label="Works" value={`${author.works.length} major works`} />
              <InfoItem icon={<Users />} label="Notable Students" value={author.students.length} />
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h2 className="font-semibold mb-4">Areas of Expertise</h2>
            <div className="flex flex-wrap gap-2">
              {author.expertise.map((field) => (
                <span
                  key={field}
                  className="bg-emerald-50 text-emerald-600 text-sm px-3 py-1 rounded-full"
                >
                  {field}
                </span>
              ))}
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h2 className="font-semibold mb-4">Notable Students</h2>
            <ul className="space-y-2">
              {author.students.map((student) => (
                <li key={student} className="text-gray-700">• {student}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* Main Content */}
        <div className="lg:col-span-2">
          <div className="bg-white p-8 rounded-lg shadow-sm mb-8">
            <h2 className="text-2xl font-bold mb-4">Biography</h2>
            <div className="prose max-w-none">
              {author.biography.split('\n\n').map((paragraph, index) => (
                <p key={index} className="text-gray-700 leading-relaxed mb-4">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>

          <div className="space-y-8">
            <h2 className="text-2xl font-bold">Major Works</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {author.works.map((work) => (
                <Link
                  key={work.id}
                  to={`/book/${work.id}`}
                  className="bg-white rounded-lg shadow-sm hover:shadow-md transition overflow-hidden group"
                >
                  <div className="relative h-48">
                    <img
                      src={work.cover}
                      alt={work.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                    />
                    <div className="absolute top-2 right-2">
                      <span className="bg-emerald-50 text-emerald-600 text-xs px-2 py-1 rounded-full">
                        {work.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="font-bold text-lg mb-2">{work.title}</h3>
                    <p className="text-gray-600 text-sm mb-2">{work.year}</p>
                    <p className="text-gray-700">{work.description}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const InfoItem = ({ icon, label, value }) => (
  <div className="flex items-center space-x-3 text-gray-600">
    {icon}
    <div>
      <p className="text-sm text-gray-500">{label}</p>
      <p className="font-medium">{value}</p>
    </div>
  </div>
);

export default AuthorDetail;