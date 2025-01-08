import { useEffect, useState } from 'react';
import api from '../utils/api';

export default function Home({ initialListings }) {
    const [listings, setListings] = useState(initialListings);

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {listings.map((listing) => (
                    <div
                        key={listing.id}
                        className="bg-white overflow-hidden shadow rounded-lg"
                    >
                        {listing.image && (
                            <img
                                src={`${process.env.NEXT_PUBLIC_API_URL}/storage/${listing.image}`}
                                alt={listing.title}
                                className="w-full h-48 object-cover"
                            />
                        )}
                        <div className="px-4 py-5 sm:p-6">
                            <h3 className="text-lg font-medium text-gray-900">
                                {listing.title}
                            </h3>
                            <p className="mt-1 text-sm text-gray-500">
                                {listing.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}