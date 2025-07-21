import React, { useState, useCallback, useMemo } from 'react';
import { Trophy, Award, Star, ChevronLeft, ChevronRight, X, Users, Target, Crown, Medal, MapPin, Clock, Heart } from 'lucide-react';

interface AchievementsProps {
  darkMode: boolean;
}

type AlbumType = 'achievement' | 'associative' | 'marathon';

interface Photo {
  url: string;
  caption: string;
}

interface BaseItem {
  title: string;
  subtitle: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  category: string;
  year: string;
  photos: Photo[];
}

interface MarathonItem extends BaseItem {
  location: string;
  distance: string;
}

interface AssociativeItem extends BaseItem {
  logo?: string;
  website?: string;
}

export const Achievements: React.FC<AchievementsProps> = ({ darkMode }) => {
  const [selectedAlbum, setSelectedAlbum] = useState<number | null>(null);
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);
  const [albumType, setAlbumType] = useState<AlbumType>('achievement');

  // Enhanced achievements data
  const enhancedAchievements: BaseItem[] = useMemo(() => [
    {
      title: "1st Prize NASA Space Apps Challenge",
      subtitle: "Galactic Problem-Solver",
      description: "First place in the international NASA Space Apps Challenge with an innovative solution for space exploration.",
      icon: <Trophy className="w-8 h-8" />,
      color: "from-yellow-500 to-yellow-600",
      category: "International Competition",
      year: "2021",
      photos: [
        { url: "/study/nasa.jpeg", caption: "NASA award ceremony" },
        { url: "https://images.unsplash.com/photo-1517976487492-5750f3195933?w=500&h=400&fit=crop&crop=entropy&cs=tinysrgb", caption: "Project presentation to jury" },
        { url: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=500&h=400&fit=crop&crop=entropy&cs=tinysrgb", caption: "Winning team with trophy" },
        { url: "/study/nasa2.jpeg", caption: "Team celebration" }
      ]
    },
    {
      title: "3rd Place Innov'Project",
      subtitle: "PACK DGSE Challenge",
      description: "Third place in the innovation challenge organized by PACK DGSE with a disruptive technological project.",
      icon: <Award className="w-8 h-8" />,
      color: "from-blue-500 to-blue-600",
      category: "National Competition",
      year: "2022",
      photos: [
        { url: "/Pyora/1.jpeg", caption: "Project pitch presentation" },
        { url: "/Pyora/2.jpeg", caption: "Technical demonstration" },
        { url: "/Pyora/3.jpeg", caption: "Innovation award ceremony" },
        { url: "/Pyora/4.jpeg", caption: "Team presentation" },
        { url: "/Pyora/5.jpeg", caption: "Product demo" },
        { url: "/Pyora/6.jpeg", caption: "Award reception" },
        { url: "/Pyora/7.jpeg", caption: "Final presentation" },
        { url: "/Pyora/8.jpeg", caption: "Technical showcase" }
      ]
    }
  ], []);

  const associativeExperience: AssociativeItem[] = useMemo(() => [
    {
      title: "Founding Member & Marketing Manager",
      subtitle: "ENET'COM Junior Enterprise",
      description: "Co-founder and marketing manager of the Junior Enterprise, developing the student entrepreneurial ecosystem and promoting innovation projects.",
      icon: <Users className="w-8 h-8" />,
      color: "from-green-500 to-green-600",
      category: "Entrepreneurship",
      year: "2020-2023",
      logo: "/logo/ejce.png",
      website: "https://jet.optimajuniorentreprise.com/en/enetcom-junior-entreprise/",
      photos: [
        { url: "/junior/1.jpg", caption: "Junior Enterprise launch event" },
        { url: "/junior/2.jpg", caption: "Entrepreneurship workshop" },
        { url: "/junior/3.jpg", caption: "Digital marketing training" },
        { url: "/junior/4.jpg", caption: "Marketing team meeting" },
        { url: "/junior/5.jpg", caption: "Team collaboration session" },
        { url: "/junior/6.jpg", caption: "Strategic planning meeting" },
        { url: "/junior/7.jpg", caption: "Project development" },
        { url: "/junior/8.jpg", caption: "Team building activity" },
        { url: "/junior/9.png", caption: "Organization meeting" },
        { url: "/junior/10.png", caption: "Team coordination" }
      ]
    },
    {
      title: "Vice-President",
      subtitle: "IEEE ENET'Com Student Branch",
      description: "Leadership of the IEEE student branch, organizing technical events, workshops, and professional training sessions for students.",
      icon: <Target className="w-8 h-8" />,
      color: "from-indigo-500 to-indigo-600",
      category: "Leadership",
      year: "2020-2021",
      logo: "/logo/ieee.png",
      website: "https://enetcom.ieee.tn/",
      photos: [
        { url: "/ieee/1.jpg", caption: "IEEE technology innovation conference" },
        { url: "/ieee/2.png", caption: "Technical training workshop" },
        { url: "/ieee/3.jpg", caption: "IEEE robotics competition" },
        { url: "/ieee/6.jpg", caption: "Awards ceremony" }
      ]
    },
    {
      title: "Event Coordinator",
      subtitle: "Tech Conferences & Workshops",
      description: "Organized and coordinated multiple technical conferences, hackathons, and professional development workshops.",
      icon: <Crown className="w-8 h-8" />,
      color: "from-red-500 to-red-600",
      category: "Event Management",
      year: "2020-2023",
      photos: [
        { url: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=500&h=400&fit=crop&crop=entropy&cs=tinysrgb", caption: "Tech event organization" },
        { url: "/ieee/4.png", caption: "Ambassador event" }
      ]
    }
  ], []);

  const marathonExperience: MarathonItem[] = useMemo(() => [
    {
      title: "Ulysse Djerba Marathon",
      subtitle: "Team Sofrecom",
      description: "Participated in the prestigious Ulysse Djerba Marathon with Team Sofrecom, combining endurance running with team spirit and professional networking.",
      icon: <Heart className="w-8 h-8" />,
      color: "from-orange-500 to-orange-600",
      category: "Marathon",
      year: "2025",
      location: "Djerba, Tunisia",
      distance: "10 km",
      photos: [
        { url: "/Djerba/1.jpeg", caption: "Marathon start with Team Sofrecom" },
        { url: "/Djerba/2.jpeg", caption: "Running with the team" },
        { url: "/Djerba/5.png", caption: "Finish line celebration" },
        { url: "/Djerba/3.jpeg", caption: "Team Sofrecom group photo" },
        { url: "/Djerba/6.png", caption: "Medal ceremony" }
      ]
    },
    {
      title: "Vaga Run",
      subtitle: "Team Sofrecom",
      description: "Participated in the Vaga Run event, demonstrating commitment to fitness and team collaboration while representing Sofrecom values.",
      icon: <MapPin className="w-8 h-8" />,
      color: "from-teal-500 to-teal-600",
      category: "Running Event",
      year: "2025",
      location: "Tunisia",
      distance: "5 km",
      photos: [
        { url: "/VAGA/1.jpg", caption: "Pre-race preparation" },
        { url: "/VAGA/2.jpg", caption: "Race action" },
        { url: "/VAGA/3.jpeg", caption: "Complete Team Sofrecom" },
        { url: "/VAGA/5.jpg", caption: "Recovery moment" },
        { url: "/VAGA/4.jpg", caption: "Post-race celebration" },
        { url: "/VAGA/6.jpeg", caption: "Team achievement" }
      ]
    },
    {
      title: "Mahdia Run",
      subtitle: "Team Sofrecom",
      description: "Completed the Mahdia Run with Team Sofrecom, showcasing dedication to personal fitness goals and team cohesion in a beautiful coastal setting.",
      icon: <Clock className="w-8 h-8" />,
      color: "from-cyan-500 to-cyan-600",
      category: "Coastal Run",
      year: "2025",
      location: "Mahdia, Tunisia",
      distance: "16 km",
      photos: [
        { url: "/Mahdia/5.png", caption: "Early morning start" },
        { url: "/Mahdia/2.png", caption: "Coastal route running" },
        { url: "/Mahdia/1.jpg", caption: "Motivated Team Sofrecom" },
        { url: "/Mahdia/3.png", caption: "Beautiful coastal scenery" },
        { url: "/Mahdia/5.png", caption: "Finish line arrival" },
        { url: "/marathon/mahdia6.jpg", caption: "Team memory photo" }
      ]
    }
  ], []);

  const stats = useMemo(() => [
    { value: "4", label: "Major Awards", color: "from-yellow-600 to-yellow-700" },
    { value: "3", label: "Leadership Roles", color: "from-green-600 to-green-700" },
    { value: "3", label: "Marathon Events", color: "from-orange-600 to-orange-700" },
    { value: "2", label: "International Competitions", color: "from-blue-600 to-blue-700" },
    { value: "5+", label: "Events Organized", color: "from-purple-600 to-purple-700" }
  ], []);

  const openAlbum = useCallback((index: number, type: AlbumType) => {
    setSelectedAlbum(index);
    setAlbumType(type);
    setCurrentPhotoIndex(0);
  }, []);

  const closeAlbum = useCallback(() => {
    setSelectedAlbum(null);
    setCurrentPhotoIndex(0);
  }, []);

  const getCurrentData = useCallback(() => {
    if (selectedAlbum === null) return null;

    switch (albumType) {
      case 'achievement':
        return enhancedAchievements[selectedAlbum];
      case 'associative':
        return associativeExperience[selectedAlbum];
      case 'marathon':
        return marathonExperience[selectedAlbum];
      default:
        return null;
    }
  }, [selectedAlbum, albumType, enhancedAchievements, associativeExperience, marathonExperience]);

  const nextPhoto = useCallback(() => {
    const currentData = getCurrentData();
    if (currentData) {
      setCurrentPhotoIndex((prev) =>
          prev === currentData.photos.length - 1 ? 0 : prev + 1
      );
    }
  }, [getCurrentData]);

  const prevPhoto = useCallback(() => {
    const currentData = getCurrentData();
    if (currentData) {
      setCurrentPhotoIndex((prev) =>
          prev === 0 ? currentData.photos.length - 1 : prev - 1
      );
    }
  }, [getCurrentData]);

  const renderPhotoGrid = useCallback((photos: Photo[], index: number, type: AlbumType) => (
      <div className="relative">
        <div className="grid grid-cols-2 gap-1 h-48">
          {photos.slice(0, 4).map((photo, photoIndex) => (
              <div
                  key={photoIndex}
                  className={`relative overflow-hidden cursor-pointer transition-transform duration-200 hover:scale-105 ${
                      photoIndex === 3 && photos.length > 4 ? 'relative' : ''
                  }`}
                  onClick={() => openAlbum(index, type)}
              >
                <img
                    src={photo.url}
                    alt={photo.caption}
                    className="w-full h-full object-cover"
                />
                {photoIndex === 3 && photos.length > 4 && (
                    <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                <span className="text-white font-bold text-lg">
                  +{photos.length - 4}
                </span>
                    </div>
                )}
              </div>
          ))}
        </div>
        <button
            onClick={() => openAlbum(index, type)}
            className="absolute top-2 right-2 bg-black bg-opacity-50 text-white px-3 py-1 rounded-full text-sm hover:bg-opacity-70 transition-colors duration-200"
        >
          View album ({photos.length})
        </button>
      </div>
  ), [openAlbum]);

  const renderCard = useCallback((item: BaseItem, index: number, type: AlbumType) => (
      <div key={index} className={`group rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden ${
          darkMode
              ? 'bg-gray-800 border border-gray-700'
              : 'bg-white border border-gray-100'
      }`}>
        {renderPhotoGrid(item.photos, index, type)}

        <div className="p-6">
          <div className="flex items-start justify-between mb-4">
            <div className={`p-3 rounded-xl bg-gradient-to-r ${item.color} text-white`}>
              {item.icon}
            </div>
            <div className="text-right">
            <span className={`px-3 py-1 text-xs font-semibold rounded-full ${
                darkMode
                    ? 'bg-gray-700 text-gray-300'
                    : 'bg-gray-100 text-gray-700'
            }`}>
              {item.category}
            </span>
              <div className={`text-sm mt-1 ${
                  darkMode ? 'text-gray-400' : 'text-gray-500'
              }`}>
                {item.year}
              </div>
            </div>
          </div>

          <h4 className={`text-xl font-bold mb-2 ${
              darkMode ? 'text-white' : 'text-gray-900'
          }`}>
            {item.title}
          </h4>

          <p className={`text-sm font-medium mb-3 ${
              darkMode ? 'text-blue-400' : 'text-blue-600'
          }`}>
            {item.subtitle}
          </p>

          {type === 'marathon' && 'location' in item && (
              <div className="flex items-center gap-4 mb-3">
                <div className="flex items-center gap-1">
                  <MapPin className="w-4 h-4 text-gray-400" />
                  <span className={`text-xs ${
                      darkMode ? 'text-gray-400' : 'text-gray-500'
                  }`}>
                {item.location}
              </span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4 text-gray-400" />
                  <span className={`text-xs ${
                      darkMode ? 'text-gray-400' : 'text-gray-500'
                  }`}>
                {item.distance}
              </span>
                </div>
              </div>
          )}

          <p className={`text-sm leading-relaxed ${
              darkMode ? 'text-gray-300' : 'text-gray-600'
          }`}>
            {item.description}
          </p>

          <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
            <div className={`w-full h-1 rounded-full bg-gradient-to-r ${item.color} opacity-60`}></div>
          </div>
        </div>
      </div>
  ), [darkMode, renderPhotoGrid]);

  const renderSection = useCallback((title: string, subtitle: string, items: BaseItem[], type: AlbumType, gridCols: string = "md:grid-cols-2") => (
      <div className="mb-16">
        <div className="text-center mb-12">
          <h3 className={`text-3xl font-bold mb-4 ${
              darkMode ? 'text-white' : 'text-gray-900'
          }`}>
            {title}
          </h3>
          <p className={`text-lg ${
              darkMode ? 'text-gray-300' : 'text-gray-600'
          }`}>
            {subtitle}
          </p>
        </div>

        <div className={`grid ${gridCols} gap-8`}>
          {items.map((item, index) => renderCard(item, index, type))}
        </div>
      </div>
  ), [darkMode, renderCard]);

  return (
      <section id="achievements" className={`py-20 ${
          darkMode ? 'bg-gray-900' : 'bg-gray-50'
      } transition-colors duration-300`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className={`text-4xl font-bold mb-4 ${
                darkMode ? 'text-white' : 'text-gray-900'
            }`}>
              Achievements & Experiences
            </h2>
            <p className={`text-xl ${
                darkMode ? 'text-gray-300' : 'text-gray-600'
            }`}>
              Awards, competitions, associative leadership, and athletic achievements
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 mb-16">
            {stats.map((stat, index) => (
                <div
                    key={index}
                    className={`text-center p-6 rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105 ${
                        darkMode
                            ? 'bg-gray-800 border border-gray-700'
                            : 'bg-white border border-gray-100'
                    }`}
                >
                  <div className={`text-4xl font-bold mb-2 bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
                    {stat.value}
                  </div>
                  <p className={`text-sm ${
                      darkMode ? 'text-gray-400' : 'text-gray-600'
                  }`}>
                    {stat.label}
                  </p>
                </div>
            ))}
          </div>

          {/* Sections */}
          {renderSection(
              "Awards & Competitions",
              "Recognition and achievements in competitions and professional projects",
              enhancedAchievements,
              'achievement'
          )}

          {renderSection(
              "Associative Experience",
              "Leadership roles and contributions to student organizations",
              associativeExperience,
              'associative',
              "md:grid-cols-2 lg:grid-cols-3"
          )}

          {renderSection(
              "Marathon & Running Experience",
              "Athletic achievements and team participation with Sofrecom",
              marathonExperience,
              'marathon',
              "md:grid-cols-2 lg:grid-cols-3"
          )}

          {/* Call to Action */}
          <div className={`text-center p-8 rounded-xl ${
              darkMode
                  ? 'bg-gray-800 border border-gray-700'
                  : 'bg-white border border-gray-100'
          } shadow-lg`}>
            <h3 className={`text-2xl font-bold mb-4 ${
                darkMode ? 'text-white' : 'text-gray-900'
            }`}>
              Ready for New Challenges
            </h3>
            <p className={`text-lg mb-6 ${
                darkMode ? 'text-gray-300' : 'text-gray-600'
            }`}>
              Always seeking innovation and stimulating projects that push technological boundaries
            </p>
          </div>

          {/* Photo Album Modal */}
          {selectedAlbum !== null && (() => {
            const currentData = getCurrentData();
            if (!currentData) return null;

            const currentPhoto = currentData.photos[currentPhotoIndex];
            const isMarathon = albumType === 'marathon';

            return (
                <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50">
                  <div className="max-w-4xl max-h-full p-4">
                    <div className="relative">
                      <button
                          onClick={closeAlbum}
                          className="absolute top-4 right-4 text-white bg-black bg-opacity-50 rounded-full p-2 hover:bg-opacity-70 transition-colors duration-200 z-10"
                      >
                        <X className="w-6 h-6" />
                      </button>

                      <div className="bg-white rounded-lg overflow-hidden">
                        <img
                            src={currentPhoto.url}
                            alt={currentPhoto.caption}
                            className="w-full h-96 object-cover"
                        />

                        <div className="p-6">
                          <h4 className="font-bold text-gray-800 mb-2">
                            {albumType === 'achievement' ? currentData.title : currentData.subtitle}
                          </h4>
                          <p className="text-gray-600 mb-4">
                            {currentPhoto.caption}
                          </p>

                          {isMarathon && 'location' in currentData && (
                              <div className="flex items-center gap-4 mb-4 text-sm text-gray-500">
                                <div className="flex items-center gap-1">
                                  <MapPin className="w-4 h-4" />
                                  <span>{currentData.location}</span>
                                </div>
                                <div className="flex items-center gap-1">
                                  <Clock className="w-4 h-4" />
                                  <span>{currentData.distance}</span>
                                </div>
                              </div>
                          )}

                          <div className="flex items-center justify-between">
                            <button
                                onClick={prevPhoto}
                                className="flex items-center text-blue-600 hover:text-blue-800 transition-colors duration-200"
                            >
                              <ChevronLeft className="w-5 h-5 mr-1" />
                              Previous
                            </button>

                            <span className="text-gray-500 text-sm">
                          {currentPhotoIndex + 1} / {currentData.photos.length}
                        </span>

                            <button
                                onClick={nextPhoto}
                                className="flex items-center text-blue-600 hover:text-blue-800 transition-colors duration-200"
                            >
                              Next
                              <ChevronRight className="w-5 h-5 ml-1" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
            );
          })()}
        </div>
      </section>
  );
};