import React from "react";
import { render, screen, fireEvent } from '@testing-library/react';
import Navigation from '../components/Navigation';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

{/*testing navigation*/}
const renderWithRouter = () => {
    render(
      <BrowserRouter>
        <Navigation />
      </BrowserRouter>
    );
  };

  describe('Navigation Component', () => {
    test('renders the navigation links', () => {
        renderWithRouter();
    
        // Check if the navigation links are present
        expect(screen.getByText(/Home/i)).toBeInTheDocument();
        expect(screen.getByText(/Collections/i)).toBeInTheDocument();
        expect(screen.getByText(/Customize Your Own T-Shirt/i)).toBeInTheDocument();
        expect(screen.getByText(/Cart/i)).toBeInTheDocument();
        expect(screen.getByText(/Profile/i)).toBeInTheDocument();
      });

  });
