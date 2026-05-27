import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, ChevronDown, Search, Phone } from 'lucide-react';

const BookingPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    fullPhone: '',
    company: '',
    spend: '',
    message: ''
  });
  const [status, setStatus] = useState({ type: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isCountryOpen, setIsCountryOpen] = useState(false);
  const [countrySearch, setCountrySearch] = useState('');
  const [selectedCountry, setSelectedCountry] = useState({
    code: '+1',
    flag: 'us',
    name: 'United States',
    pattern: /^[0-9]{10}$/,
    placeholder: '5551234567'
  });

  // ALL COUNTRIES WITH FLAG CODES (using flagcdn.com for reliable flags)
  const getFlagUrl = (countryCode) => `https://flagcdn.com/w20/${countryCode}.png`;
  
  const countries = [
    // North America
    { code: '+1', flag: 'us', name: 'United States', pattern: /^[0-9]{10}$/, placeholder: '5551234567' },
    { code: '+1', flag: 'ca', name: 'Canada', pattern: /^[0-9]{10}$/, placeholder: '5551234567' },
    { code: '+52', flag: 'mx', name: 'Mexico', pattern: /^[0-9]{10}$/, placeholder: '5512345678' },
    { code: '+1', flag: 'jm', name: 'Jamaica', pattern: /^[0-9]{10}$/, placeholder: '8761234567' },
    { code: '+1', flag: 'bs', name: 'Bahamas', pattern: /^[0-9]{10}$/, placeholder: '2421234567' },
    { code: '+1', flag: 'bb', name: 'Barbados', pattern: /^[0-9]{10}$/, placeholder: '2461234567' },
    { code: '+1', flag: 'tt', name: 'Trinidad and Tobago', pattern: /^[0-9]{10}$/, placeholder: '8681234567' },
    { code: '+1', flag: 'dm', name: 'Dominica', pattern: /^[0-9]{10}$/, placeholder: '7671234567' },
    { code: '+1', flag: 'lc', name: 'Saint Lucia', pattern: /^[0-9]{10}$/, placeholder: '7581234567' },
    { code: '+1', flag: 'vc', name: 'Saint Vincent', pattern: /^[0-9]{10}$/, placeholder: '7841234567' },
    { code: '+1', flag: 'gd', name: 'Grenada', pattern: /^[0-9]{10}$/, placeholder: '4731234567' },
    { code: '+1', flag: 'ag', name: 'Antigua', pattern: /^[0-9]{10}$/, placeholder: '2681234567' },
    { code: '+1', flag: 'kn', name: 'Saint Kitts', pattern: /^[0-9]{10}$/, placeholder: '8691234567' },
    { code: '+1', flag: 'do', name: 'Dominican Republic', pattern: /^[0-9]{10}$/, placeholder: '8091234567' },
    
    // Europe
    { code: '+44', flag: 'gb', name: 'United Kingdom', pattern: /^[0-9]{10}$/, placeholder: '7911123456' },
    { code: '+49', flag: 'de', name: 'Germany', pattern: /^[0-9]{10,11}$/, placeholder: '15123456789' },
    { code: '+33', flag: 'fr', name: 'France', pattern: /^[0-9]{9}$/, placeholder: '612345678' },
    { code: '+39', flag: 'it', name: 'Italy', pattern: /^[0-9]{10}$/, placeholder: '3123456789' },
    { code: '+34', flag: 'es', name: 'Spain', pattern: /^[0-9]{9}$/, placeholder: '612345678' },
    { code: '+31', flag: 'nl', name: 'Netherlands', pattern: /^[0-9]{9}$/, placeholder: '612345678' },
    { code: '+32', flag: 'be', name: 'Belgium', pattern: /^[0-9]{9}$/, placeholder: '471234567' },
    { code: '+41', flag: 'ch', name: 'Switzerland', pattern: /^[0-9]{9}$/, placeholder: '791234567' },
    { code: '+43', flag: 'at', name: 'Austria', pattern: /^[0-9]{10}$/, placeholder: '6641234567' },
    { code: '+46', flag: 'se', name: 'Sweden', pattern: /^[0-9]{9}$/, placeholder: '701234567' },
    { code: '+47', flag: 'no', name: 'Norway', pattern: /^[0-9]{8}$/, placeholder: '41234567' },
    { code: '+45', flag: 'dk', name: 'Denmark', pattern: /^[0-9]{8}$/, placeholder: '12345678' },
    { code: '+358', flag: 'fi', name: 'Finland', pattern: /^[0-9]{9,10}$/, placeholder: '401234567' },
    { code: '+353', flag: 'ie', name: 'Ireland', pattern: /^[0-9]{9}$/, placeholder: '851234567' },
    { code: '+351', flag: 'pt', name: 'Portugal', pattern: /^[0-9]{9}$/, placeholder: '912345678' },
    { code: '+30', flag: 'gr', name: 'Greece', pattern: /^[0-9]{10}$/, placeholder: '6912345678' },
    { code: '+90', flag: 'tr', name: 'Turkey', pattern: /^[0-9]{10}$/, placeholder: '5012345678' },
    { code: '+48', flag: 'pl', name: 'Poland', pattern: /^[0-9]{9}$/, placeholder: '501234567' },
    { code: '+420', flag: 'cz', name: 'Czech Republic', pattern: /^[0-9]{9}$/, placeholder: '601123456' },
    { code: '+421', flag: 'sk', name: 'Slovakia', pattern: /^[0-9]{9}$/, placeholder: '901123456' },
    { code: '+36', flag: 'hu', name: 'Hungary', pattern: /^[0-9]{9}$/, placeholder: '201234567' },
    { code: '+40', flag: 'ro', name: 'Romania', pattern: /^[0-9]{9}$/, placeholder: '712345678' },
    { code: '+359', flag: 'bg', name: 'Bulgaria', pattern: /^[0-9]{9}$/, placeholder: '881234567' },
    { code: '+385', flag: 'hr', name: 'Croatia', pattern: /^[0-9]{9}$/, placeholder: '912345678' },
    { code: '+386', flag: 'si', name: 'Slovenia', pattern: /^[0-9]{8}$/, placeholder: '40123456' },
    { code: '+372', flag: 'ee', name: 'Estonia', pattern: /^[0-9]{7,8}$/, placeholder: '51234567' },
    { code: '+371', flag: 'lv', name: 'Latvia', pattern: /^[0-9]{8}$/, placeholder: '20123456' },
    { code: '+370', flag: 'lt', name: 'Lithuania', pattern: /^[0-9]{8}$/, placeholder: '61234567' },
    { code: '+381', flag: 'rs', name: 'Serbia', pattern: /^[0-9]{8,9}$/, placeholder: '601234567' },
    { code: '+387', flag: 'ba', name: 'Bosnia', pattern: /^[0-9]{8}$/, placeholder: '61123456' },
    { code: '+389', flag: 'mk', name: 'North Macedonia', pattern: /^[0-9]{8}$/, placeholder: '70123456' },
    { code: '+355', flag: 'al', name: 'Albania', pattern: /^[0-9]{8}$/, placeholder: '671234567' },
    { code: '+356', flag: 'mt', name: 'Malta', pattern: /^[0-9]{8}$/, placeholder: '79123456' },
    { code: '+377', flag: 'mc', name: 'Monaco', pattern: /^[0-9]{8,9}$/, placeholder: '612345678' },
    { code: '+352', flag: 'lu', name: 'Luxembourg', pattern: /^[0-9]{9}$/, placeholder: '621123456' },
    { code: '+423', flag: 'li', name: 'Liechtenstein', pattern: /^[0-9]{7}$/, placeholder: '7891234' },
    
    // Africa
    { code: '+254', flag: 'ke', name: 'Kenya', pattern: /^[0-9]{9}$/, placeholder: '712345678' },
    { code: '+256', flag: 'ug', name: 'Uganda', pattern: /^[0-9]{9}$/, placeholder: '712345678' },
    { code: '+255', flag: 'tz', name: 'Tanzania', pattern: /^[0-9]{9}$/, placeholder: '712345678' },
    { code: '+250', flag: 'rw', name: 'Rwanda', pattern: /^[0-9]{9}$/, placeholder: '712345678' },
    { code: '+257', flag: 'bi', name: 'Burundi', pattern: /^[0-9]{8}$/, placeholder: '71234567' },
    { code: '+27', flag: 'za', name: 'South Africa', pattern: /^[0-9]{9}$/, placeholder: '712345678' },
    { code: '+264', flag: 'na', name: 'Namibia', pattern: /^[0-9]{9}$/, placeholder: '811234567' },
    { code: '+267', flag: 'bw', name: 'Botswana', pattern: /^[0-9]{8}$/, placeholder: '71234567' },
    { code: '+263', flag: 'zw', name: 'Zimbabwe', pattern: /^[0-9]{9}$/, placeholder: '712345678' },
    { code: '+260', flag: 'zm', name: 'Zambia', pattern: /^[0-9]{9}$/, placeholder: '961234567' },
    { code: '+265', flag: 'mw', name: 'Malawi', pattern: /^[0-9]{9}$/, placeholder: '881234567' },
    { code: '+258', flag: 'mz', name: 'Mozambique', pattern: /^[0-9]{9}$/, placeholder: '821234567' },
    { code: '+244', flag: 'ao', name: 'Angola', pattern: /^[0-9]{9}$/, placeholder: '921234567' },
    { code: '+233', flag: 'gh', name: 'Ghana', pattern: /^[0-9]{9}$/, placeholder: '201234567' },
    { code: '+234', flag: 'ng', name: 'Nigeria', pattern: /^[0-9]{10}$/, placeholder: '8021234567' },
    { code: '+225', flag: 'ci', name: 'Ivory Coast', pattern: /^[0-9]{8}$/, placeholder: '01234567' },
    { code: '+226', flag: 'bf', name: 'Burkina Faso', pattern: /^[0-9]{8}$/, placeholder: '70123456' },
    { code: '+223', flag: 'ml', name: 'Mali', pattern: /^[0-9]{8}$/, placeholder: '70123456' },
    { code: '+222', flag: 'mr', name: 'Mauritania', pattern: /^[0-9]{8}$/, placeholder: '22123456' },
    { code: '+221', flag: 'sn', name: 'Senegal', pattern: /^[0-9]{9}$/, placeholder: '771234567' },
    { code: '+229', flag: 'bj', name: 'Benin', pattern: /^[0-9]{8}$/, placeholder: '90123456' },
    { code: '+228', flag: 'tg', name: 'Togo', pattern: /^[0-9]{8}$/, placeholder: '90123456' },
    { code: '+231', flag: 'lr', name: 'Liberia', pattern: /^[0-9]{7,8}$/, placeholder: '770123456' },
    { code: '+232', flag: 'sl', name: 'Sierra Leone', pattern: /^[0-9]{8}$/, placeholder: '76123456' },
    { code: '+211', flag: 'ss', name: 'South Sudan', pattern: /^[0-9]{9}$/, placeholder: '921234567' },
    { code: '+249', flag: 'sd', name: 'Sudan', pattern: /^[0-9]{9}$/, placeholder: '911234567' },
    { code: '+251', flag: 'et', name: 'Ethiopia', pattern: /^[0-9]{9}$/, placeholder: '911234567' },
    { code: '+252', flag: 'so', name: 'Somalia', pattern: /^[0-9]{8}$/, placeholder: '61123456' },
    { code: '+253', flag: 'dj', name: 'Djibouti', pattern: /^[0-9]{8}$/, placeholder: '77123456' },
    { code: '+218', flag: 'ly', name: 'Libya', pattern: /^[0-9]{9}$/, placeholder: '911234567' },
    { code: '+216', flag: 'tn', name: 'Tunisia', pattern: /^[0-9]{8}$/, placeholder: '20123456' },
    { code: '+213', flag: 'dz', name: 'Algeria', pattern: /^[0-9]{9}$/, placeholder: '551234567' },
    { code: '+212', flag: 'ma', name: 'Morocco', pattern: /^[0-9]{9}$/, placeholder: '612345678' },
    { code: '+230', flag: 'mu', name: 'Mauritius', pattern: /^[0-9]{7}$/, placeholder: '5712345' },
    { code: '+248', flag: 'sc', name: 'Seychelles', pattern: /^[0-9]{7}$/, placeholder: '2512345' },
    { code: '+269', flag: 'km', name: 'Comoros', pattern: /^[0-9]{7}$/, placeholder: '3212345' },
    
    // Asia
    { code: '+91', flag: 'in', name: 'India', pattern: /^[0-9]{10}$/, placeholder: '9876543210' },
    { code: '+86', flag: 'cn', name: 'China', pattern: /^[0-9]{11}$/, placeholder: '13812345678' },
    { code: '+81', flag: 'jp', name: 'Japan', pattern: /^[0-9]{10}$/, placeholder: '9012345678' },
    { code: '+82', flag: 'kr', name: 'South Korea', pattern: /^[0-9]{10}$/, placeholder: '1012345678' },
    { code: '+65', flag: 'sg', name: 'Singapore', pattern: /^[0-9]{8}$/, placeholder: '91234567' },
    { code: '+60', flag: 'my', name: 'Malaysia', pattern: /^[0-9]{9,10}$/, placeholder: '123456789' },
    { code: '+62', flag: 'id', name: 'Indonesia', pattern: /^[0-9]{10,12}$/, placeholder: '8123456789' },
    { code: '+63', flag: 'ph', name: 'Philippines', pattern: /^[0-9]{10}$/, placeholder: '9123456789' },
    { code: '+66', flag: 'th', name: 'Thailand', pattern: /^[0-9]{9}$/, placeholder: '812345678' },
    { code: '+84', flag: 'vn', name: 'Vietnam', pattern: /^[0-9]{9,10}$/, placeholder: '901234567' },
    { code: '+95', flag: 'mm', name: 'Myanmar', pattern: /^[0-9]{9}$/, placeholder: '912345678' },
    { code: '+855', flag: 'kh', name: 'Cambodia', pattern: /^[0-9]{8,9}$/, placeholder: '12345678' },
    { code: '+856', flag: 'la', name: 'Laos', pattern: /^[0-9]{9,10}$/, placeholder: '2023123456' },
    { code: '+673', flag: 'bn', name: 'Brunei', pattern: /^[0-9]{7}$/, placeholder: '7123456' },
    { code: '+670', flag: 'tl', name: 'East Timor', pattern: /^[0-9]{7,8}$/, placeholder: '77212345' },
    { code: '+977', flag: 'np', name: 'Nepal', pattern: /^[0-9]{10}$/, placeholder: '9812345678' },
    { code: '+880', flag: 'bd', name: 'Bangladesh', pattern: /^[0-9]{10}$/, placeholder: '1712345678' },
    { code: '+92', flag: 'pk', name: 'Pakistan', pattern: /^[0-9]{10}$/, placeholder: '3012345678' },
    { code: '+94', flag: 'lk', name: 'Sri Lanka', pattern: /^[0-9]{9}$/, placeholder: '712345678' },
    { code: '+960', flag: 'mv', name: 'Maldives', pattern: /^[0-9]{7}$/, placeholder: '9123456' },
    { code: '+7', flag: 'kz', name: 'Kazakhstan', pattern: /^[0-9]{10}$/, placeholder: '7012345678' },
    { code: '+996', flag: 'kg', name: 'Kyrgyzstan', pattern: /^[0-9]{9}$/, placeholder: '701234567' },
    { code: '+992', flag: 'tj', name: 'Tajikistan', pattern: /^[0-9]{9}$/, placeholder: '901234567' },
    { code: '+993', flag: 'tm', name: 'Turkmenistan', pattern: /^[0-9]{8}$/, placeholder: '65123456' },
    { code: '+998', flag: 'uz', name: 'Uzbekistan', pattern: /^[0-9]{9}$/, placeholder: '901234567' },
    { code: '+374', flag: 'am', name: 'Armenia', pattern: /^[0-9]{8}$/, placeholder: '77123456' },
    { code: '+994', flag: 'az', name: 'Azerbaijan', pattern: /^[0-9]{9}$/, placeholder: '501234567' },
    { code: '+995', flag: 'ge', name: 'Georgia', pattern: /^[0-9]{9}$/, placeholder: '555123456' },
    { code: '+972', flag: 'il', name: 'Israel', pattern: /^[0-9]{9}$/, placeholder: '501234567' },
    { code: '+964', flag: 'iq', name: 'Iraq', pattern: /^[0-9]{10}$/, placeholder: '7901234567' },
    { code: '+98', flag: 'ir', name: 'Iran', pattern: /^[0-9]{10}$/, placeholder: '9123456789' },
    { code: '+962', flag: 'jo', name: 'Jordan', pattern: /^[0-9]{9}$/, placeholder: '791234567' },
    { code: '+965', flag: 'kw', name: 'Kuwait', pattern: /^[0-9]{8}$/, placeholder: '50123456' },
    { code: '+966', flag: 'sa', name: 'Saudi Arabia', pattern: /^[0-9]{9}$/, placeholder: '512345678' },
    { code: '+967', flag: 'ye', name: 'Yemen', pattern: /^[0-9]{9}$/, placeholder: '771234567' },
    { code: '+968', flag: 'om', name: 'Oman', pattern: /^[0-9]{8}$/, placeholder: '92123456' },
    { code: '+971', flag: 'ae', name: 'UAE', pattern: /^[0-9]{9}$/, placeholder: '501234567' },
    { code: '+973', flag: 'bh', name: 'Bahrain', pattern: /^[0-9]{8}$/, placeholder: '33123456' },
    { code: '+974', flag: 'qa', name: 'Qatar', pattern: /^[0-9]{8}$/, placeholder: '33123456' },
    { code: '+961', flag: 'lb', name: 'Lebanon', pattern: /^[0-9]{7,8}$/, placeholder: '71123456' },
    { code: '+963', flag: 'sy', name: 'Syria', pattern: /^[0-9]{9}$/, placeholder: '941234567' },
    { code: '+970', flag: 'ps', name: 'Palestine', pattern: /^[0-9]{9}$/, placeholder: '591234567' },
    { code: '+20', flag: 'eg', name: 'Egypt', pattern: /^[0-9]{10}$/, placeholder: '1001234567' },
    
    // South America
    { code: '+55', flag: 'br', name: 'Brazil', pattern: /^[0-9]{11}$/, placeholder: '11912345678' },
    { code: '+54', flag: 'ar', name: 'Argentina', pattern: /^[0-9]{10}$/, placeholder: '9111234567' },
    { code: '+56', flag: 'cl', name: 'Chile', pattern: /^[0-9]{9}$/, placeholder: '912345678' },
    { code: '+57', flag: 'co', name: 'Colombia', pattern: /^[0-9]{10}$/, placeholder: '3012345678' },
    { code: '+58', flag: 've', name: 'Venezuela', pattern: /^[0-9]{10}$/, placeholder: '4121234567' },
    { code: '+51', flag: 'pe', name: 'Peru', pattern: /^[0-9]{9}$/, placeholder: '912345678' },
    { code: '+593', flag: 'ec', name: 'Ecuador', pattern: /^[0-9]{9}$/, placeholder: '991234567' },
    { code: '+591', flag: 'bo', name: 'Bolivia', pattern: /^[0-9]{8}$/, placeholder: '71234567' },
    { code: '+595', flag: 'py', name: 'Paraguay', pattern: /^[0-9]{9}$/, placeholder: '961234567' },
    { code: '+598', flag: 'uy', name: 'Uruguay', pattern: /^[0-9]{8}$/, placeholder: '91234567' },
    { code: '+592', flag: 'gy', name: 'Guyana', pattern: /^[0-9]{7}$/, placeholder: '6123456' },
    { code: '+597', flag: 'sr', name: 'Suriname', pattern: /^[0-9]{7}$/, placeholder: '7123456' },
    { code: '+594', flag: 'gf', name: 'French Guiana', pattern: /^[0-9]{9}$/, placeholder: '694123456' },
    
    // Central America
    { code: '+507', flag: 'pa', name: 'Panama', pattern: /^[0-9]{8}$/, placeholder: '61234567' },
    { code: '+506', flag: 'cr', name: 'Costa Rica', pattern: /^[0-9]{8}$/, placeholder: '83123456' },
    { code: '+505', flag: 'ni', name: 'Nicaragua', pattern: /^[0-9]{8}$/, placeholder: '81234567' },
    { code: '+504', flag: 'hn', name: 'Honduras', pattern: /^[0-9]{8}$/, placeholder: '91234567' },
    { code: '+503', flag: 'sv', name: 'El Salvador', pattern: /^[0-9]{8}$/, placeholder: '70123456' },
    { code: '+502', flag: 'gt', name: 'Guatemala', pattern: /^[0-9]{8}$/, placeholder: '51234567' },
    { code: '+501', flag: 'bz', name: 'Belize', pattern: /^[0-9]{7}$/, placeholder: '6123456' },
    { code: '+53', flag: 'cu', name: 'Cuba', pattern: /^[0-9]{8}$/, placeholder: '51234567' },
    { code: '+509', flag: 'ht', name: 'Haiti', pattern: /^[0-9]{8}$/, placeholder: '34123456' },
    
    // Oceania
    { code: '+61', flag: 'au', name: 'Australia', pattern: /^[0-9]{9}$/, placeholder: '412345678' },
    { code: '+64', flag: 'nz', name: 'New Zealand', pattern: /^[0-9]{9}$/, placeholder: '211234567' },
    { code: '+679', flag: 'fj', name: 'Fiji', pattern: /^[0-9]{7}$/, placeholder: '7012345' },
    { code: '+675', flag: 'pg', name: 'Papua New Guinea', pattern: /^[0-9]{7,8}$/, placeholder: '70123456' },
    { code: '+677', flag: 'sb', name: 'Solomon Islands', pattern: /^[0-9]{7}$/, placeholder: '7412345' },
    { code: '+678', flag: 'vu', name: 'Vanuatu', pattern: /^[0-9]{5,7}$/, placeholder: '5123456' },
    { code: '+682', flag: 'ck', name: 'Cook Islands', pattern: /^[0-9]{5}$/, placeholder: '71234' },
    { code: '+685', flag: 'ws', name: 'Samoa', pattern: /^[0-9]{7}$/, placeholder: '7512345' },
    { code: '+676', flag: 'to', name: 'Tonga', pattern: /^[0-9]{5,7}$/, placeholder: '7012345' },
    { code: '+691', flag: 'fm', name: 'Micronesia', pattern: /^[0-9]{7}$/, placeholder: '3201234' },
    { code: '+692', flag: 'mh', name: 'Marshall Islands', pattern: /^[0-9]{7}$/, placeholder: '4561234' },
    { code: '+686', flag: 'ki', name: 'Kiribati', pattern: /^[0-9]{5}$/, placeholder: '61234' },
    { code: '+674', flag: 'nr', name: 'Nauru', pattern: /^[0-9]{7}$/, placeholder: '5551234' },
    { code: '+680', flag: 'pw', name: 'Palau', pattern: /^[0-9]{7}$/, placeholder: '7771234' }
  ];

  // Filter countries based on search input
  const filteredCountries = countries.filter(country => {
    const searchTerm = countrySearch.toLowerCase();
    return (
      country.name.toLowerCase().includes(searchTerm) ||
      country.code.includes(searchTerm)
    );
  });

  const handleCountrySelect = (country) => {
    setSelectedCountry(country);
    setIsCountryOpen(false);
    setCountrySearch('');
    setFormData({ ...formData, fullPhone: '' });
  };

  const handlePhoneChange = (e) => {
    const value = e.target.value.replace(/\D/g, '');
    setFormData({ ...formData, fullPhone: value });
  };

  const validatePhone = () => {
    if (!formData.fullPhone) return true;
    return selectedCountry.pattern.test(formData.fullPhone);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (formData.fullPhone && !validatePhone()) {
      setStatus({ 
        type: 'error', 
        message: `❌ Invalid phone number for ${selectedCountry.name}. Expected ${selectedCountry.pattern.toString().match(/\d+/g)?.[0]} digits.` 
      });
      return;
    }

    setIsSubmitting(true);
    setStatus({ type: '', message: '' });

    try {
      const fullPhoneNumber = `${selectedCountry.code}${formData.fullPhone}`;
      
      const response = await fetch('https://formspree.io/f/mjgzpngo', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: fullPhoneNumber,
          countryCode: selectedCountry.code,
          countryName: selectedCountry.name,
          company: formData.company,
          monthly_spend: formData.spend,
          message: formData.message,
          _subject: `New Booking Request from ${formData.name}`,
        })
      });

      if (response.ok) {
        setStatus({ 
          type: 'success', 
          message: '✓ Booking request sent! We\'ll contact you within 24 hours.' 
        });
        setFormData({
          name: '',
          email: '',
          fullPhone: '',
          company: '',
          spend: '',
          message: ''
        });
        setSelectedCountry({
          code: '+1',
          flag: 'us',
          name: 'United States',
          pattern: /^[0-9]{10}$/,
          placeholder: '5551234567'
        });
      } else {
        throw new Error('Submission failed');
      }
    } catch (error) {
      setStatus({ 
        type: 'error', 
        message: '❌ Failed to send. Please email us directly at vireonads757@gmail.com' 
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-black pt-20 sm:pt-24 md:pt-28 lg:pt-32 pb-12 sm:pb-16 md:pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <button 
          onClick={() => navigate('/')} 
          className="flex items-center gap-2 text-gray-400 hover:text-amber-500 transition-colors mb-6 sm:mb-8 text-sm sm:text-base"
        >
          <ArrowLeft size={18} className="sm:w-5 sm:h-5" /> Back to Home
        </button>

        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-8 sm:mb-12">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4">
              Book a <span className="text-amber-500">Consultation</span>
            </h1>
            <p className="text-gray-400 text-sm sm:text-base">Let's discuss how we can scale your brand with high-volume creative</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6 bg-white/5 p-4 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl border border-white/10">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              <div>
                <label className="block text-xs sm:text-sm font-medium mb-1 sm:mb-2 text-gray-300">Full Name *</label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-black border border-gray-700 rounded-lg px-3 sm:px-4 py-2 sm:py-3 focus:border-amber-500 focus:outline-none text-white text-sm sm:text-base"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label className="block text-xs sm:text-sm font-medium mb-1 sm:mb-2 text-gray-300">Email Address *</label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-black border border-gray-700 rounded-lg px-3 sm:px-4 py-2 sm:py-3 focus:border-amber-500 focus:outline-none text-white text-sm sm:text-base"
                  placeholder="john@example.com"
                />
              </div>
            </div>

            {/* Combined Country Code + Phone Number */}
            <div>
              <label className="block text-xs sm:text-sm font-medium mb-1 sm:mb-2 text-gray-300">Phone Number *</label>
              <div className="flex gap-2">
                {/* Country Code Selector with Flag Image */}
                <div className="relative">
                  <button
                    type="button"
                    onClick={() => setIsCountryOpen(!isCountryOpen)}
                    className="bg-black border border-gray-700 rounded-lg px-3 py-2 sm:py-3 focus:border-amber-500 focus:outline-none text-white text-sm sm:text-base flex items-center gap-2 h-full"
                  >
                    <img 
                      src={getFlagUrl(selectedCountry.flag)} 
                      alt={selectedCountry.name}
                      className="w-5 h-4 object-cover"
                    />
                    <span className="font-mono">{selectedCountry.code}</span>
                    <ChevronDown size={16} className={`transition-transform ${isCountryOpen ? 'rotate-180' : ''}`} />
                  </button>
                  
                  {isCountryOpen && (
                    <div className="absolute z-20 w-80 mt-1 bg-black border border-gray-700 rounded-lg overflow-hidden left-0">
                      {/* Search Input */}
                      <div className="p-2 border-b border-gray-700">
                        <div className="flex items-center gap-2 bg-gray-900 rounded-lg px-3 py-2">
                          <Search size={16} className="text-gray-500" />
                          <input
                            type="text"
                            placeholder="Search country or code..."
                            value={countrySearch}
                            onChange={(e) => setCountrySearch(e.target.value)}
                            className="bg-transparent flex-1 outline-none text-white text-sm"
                            autoFocus
                          />
                        </div>
                      </div>
                      
                      {/* Countries List */}
                      <div className="max-h-60 overflow-y-auto">
                        {filteredCountries.map((country, idx) => (
                          <button
                            key={`${country.code}-${country.name}-${idx}`}
                            type="button"
                            onClick={() => handleCountrySelect(country)}
                            className="w-full px-3 py-2 text-left hover:bg-amber-500/20 transition-colors flex items-center gap-2 text-sm"
                          >
                            <img 
                              src={getFlagUrl(country.flag)} 
                              alt={country.name}
                              className="w-5 h-4 object-cover"
                            />
                            <span className="text-white font-mono">{country.code}</span>
                            <span className="text-gray-400 text-xs truncate">{country.name}</span>
                          </button>
                        ))}
                        {filteredCountries.length === 0 && (
                          <div className="px-4 py-3 text-gray-500 text-sm text-center">
                            No countries found
                          </div>
                        )}
                      </div>
                    </div>
                  )}
                </div>

                {/* Phone Number Input */}
                <div className="flex-1 relative">
                  <Phone size={16} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
                  <input
                    type="tel"
                    name="fullPhone"
                    value={formData.fullPhone}
                    onChange={handlePhoneChange}
                    className={`w-full bg-black border rounded-lg pl-9 pr-3 py-2 sm:py-3 focus:outline-none text-white text-sm sm:text-base ${
                      formData.fullPhone && !validatePhone() ? 'border-red-500' : 'border-gray-700 focus:border-amber-500'
                    }`}
                    placeholder={selectedCountry.placeholder}
                  />
                </div>
              </div>
              {formData.fullPhone && !validatePhone() && (
                <p className="text-red-500 text-xs mt-1">
                  Invalid format. Expected {selectedCountry.pattern.toString().match(/\d+/g)?.[0]} digits for {selectedCountry.name}
                </p>
              )}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              <div>
                <label className="block text-xs sm:text-sm font-medium mb-1 sm:mb-2 text-gray-300">Company Name</label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full bg-black border border-gray-700 rounded-lg px-3 sm:px-4 py-2 sm:py-3 focus:border-amber-500 focus:outline-none text-white text-sm sm:text-base"
                  placeholder="Your Company"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs sm:text-sm font-medium mb-1 sm:mb-2 text-gray-300">Monthly Ad Spend (USD)</label>
              <select
                name="spend"
                value={formData.spend}
                onChange={handleChange}
                className="w-full bg-black border border-gray-700 rounded-lg px-3 sm:px-4 py-2 sm:py-3 focus:border-amber-500 focus:outline-none text-white text-sm sm:text-base"
              >
                <option value="">Select your monthly ad spend range</option>
                <option value="$0 - $5,000">$0 - $5,000</option>
                <option value="$5,000 - $10,000">$5,000 - $10,000</option>
                <option value="$10,000 - $25,000">$10,000 - $25,000</option>
                <option value="$25,000 - $50,000">$25,000 - $50,000</option>
                <option value="$50,000 - $100,000">$50,000 - $100,000</option>
                <option value="$100,000 - $250,000">$100,000 - $250,000</option>
                <option value="$250,000 - $500,000">$250,000 - $500,000</option>
                <option value="$500,000 - $1,000,000">$500,000 - $1,000,000</option>
                <option value="$1,000,000+">$1,000,000+</option>
              </select>
            </div>

            <div>
              <label className="block text-xs sm:text-sm font-medium mb-1 sm:mb-2 text-gray-300">Message</label>
              <textarea
                name="message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell us about your brand, goals, and challenges..."
                className="w-full bg-black border border-gray-700 rounded-lg px-3 sm:px-4 py-2 sm:py-3 focus:border-amber-500 focus:outline-none text-white text-sm sm:text-base resize-none"
              ></textarea>
            </div>

            <input type="text" name="_gotcha" style={{ display: 'none' }} />

            {status.message && (
              <div className={`p-3 sm:p-4 rounded-lg text-sm sm:text-base ${
                status.type === 'success' 
                  ? 'bg-green-500/20 text-green-400 border border-green-500/30' 
                  : 'bg-red-500/20 text-red-400 border border-red-500/30'
              }`}>
                {status.message}
              </div>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-gradient-to-r from-amber-500 to-amber-600 text-black py-3 sm:py-4 rounded-full font-semibold hover:from-amber-600 hover:to-amber-700 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 text-sm sm:text-base"
            >
              {isSubmitting ? 'Sending...' : 'Book Your Consultation →'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookingPage;