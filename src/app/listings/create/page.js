'use client';

import AuthGuard from '@/components/AuthGuard';
import CreateListing from '@/components/CreateListing';

export default function CreateListingPage() {
    return (
        <AuthGuard>
            <CreateListing />
        </AuthGuard>
    );
}