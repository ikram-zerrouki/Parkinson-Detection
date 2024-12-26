import React, { useState, useEffect } from 'react';
import Nav from './Nav';
import './HistoryPage.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom'; // Importer useNavigate

function HistoryPage() {
    const { t } = useTranslation();
    const [diagnosisHistory, setDiagnosisHistory] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");
    const [sortOption, setSortOption] = useState("");
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const navigate = useNavigate(); // Initialiser useNavigate

    const mockData = [
        {
            patientName: "Liam Xavior",
            doctorName: "Dr. Nezar",
            isPositive: true,
            date: "2024-06-26"
        },
        {
            patientName: "Amin",
            doctorName: "Dr. Nadir",
            isPositive: false,
            date: "2024-06-25"
        },
        {
            patientName: "Adam Lorem",
            doctorName: "Dr. Nadir",
            isPositive: false,
            date: "2024-06-24"
        },
    ];

    useEffect(() => {
        setDiagnosisHistory(mockData);
    }, []);

    const handleSearch = (event) => {
        setSearchQuery(event.target.value);
    };

    const handleSort = (option) => {
        setSortOption(option);
        let sortedData = [...diagnosisHistory];

        switch (option) {
            case "name":
                sortedData.sort((a, b) => a.patientName.localeCompare(b.patientName));
                break;
            case "date":
                sortedData.sort((a, b) => new Date(b.date) - new Date(a.date));
                break;
            case "doctor":
                sortedData.sort((a, b) => a.doctorName.localeCompare(b.doctorName));
                break;
            default:
                break;
        }

        setDiagnosisHistory(sortedData);
        setIsDropdownOpen(false);
    };

    const filteredHistory = diagnosisHistory.filter(diagnosis =>
        diagnosis.patientName.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    // Fonction pour rediriger vers la page SavePatient avec le nom du patient
    const handleUpdate = (patientName) => {
        navigate(`/save-patient/${patientName}`);
    };

    // Fonction pour rediriger vers la page ViewMore avec le nom du patient
    const handleViewMore = (patientName) => {
        navigate(`/view-more/${patientName}`);
    };

    return (
        <div className="history-page">
            <Nav />
            <div className="history-content">
                <div className="title-with-image">
                    <h1>{t('history.title')}</h1>
                </div>

                <div className="search-and-filter">
                    <div className="filter-dropdown">
                        <button className="filter-button" onClick={toggleDropdown}>
                            {t('history.filterButton')} <FontAwesomeIcon icon={faChevronDown} />
                        </button>
                        {isDropdownOpen && (
                            <div className="dropdown-menu-modern">
                                <button onClick={() => handleSort("name")}>{t('history.filterByName')}</button>
                                <button onClick={() => handleSort("doctor")}>{t('history.filterByDoctor')}</button>
                                <button onClick={() => handleSort("date")}>{t('history.filterByDate')}</button>
                            </div>
                        )}
                    </div>

                    <div className="search-bar">
                        <input
                            type="text"
                            placeholder={t('history.searchPlaceholder')}
                            value={searchQuery}
                            onChange={handleSearch}
                        />
                    </div>
                </div>

                <div className="diagnosis-list">
                    {filteredHistory.map((diagnosis, index) => (
                        <div key={index} className="diagnosis-item">
                            <div className="diagnosis-info">
                                <div className="diagnosis-details">
                                    <h2>{diagnosis.patientName}</h2>
                                    <p>{t('history.refBy')}: {diagnosis.doctorName}</p>
                                    <p>{t('history.diagnosis')}: {diagnosis.isPositive ? t('history.positive') : t('history.negative')}</p>
                                </div>
                            </div>
                            <div className="diagnosis-date">
                                <p>{new Date(diagnosis.date).toLocaleDateString()}</p>
                            </div>
                            <div className="diagnosis-actions">
                                <button onClick={() => handleViewMore(diagnosis.patientName)}>
                                    {t('history.viewMore')}
                                </button>
                                <button onClick={() => handleUpdate(diagnosis.patientName)}>
                                    {t('history.update')}
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default HistoryPage;
