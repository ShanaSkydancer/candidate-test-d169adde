import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

type NavEvent = {
    path: string
}

// Component to listen for navigation events from other micro-frontends
export const NavigationListener = () => {
    const navigate = useNavigate();

    useEffect(() => {
        // Event handler for navigation events from the navigation micro-frontend
        const handleNavEvent = (event: CustomEvent<NavEvent>) => {
            navigate(event.detail.path);
        };

        // Add the event listener
        window.addEventListener(
            "navigation-change",
            handleNavEvent as EventListener
        );

        // Clean up
        return () => {
            window.removeEventListener(
                "navigation-change",
                handleNavEvent as EventListener
            );
        };
    }, [navigate]);

    return null;
};