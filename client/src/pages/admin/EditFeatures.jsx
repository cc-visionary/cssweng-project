import React, { Component } from 'react';
import FormData from 'form-data';
import { toast } from 'react-toastify';

import { FeatureList } from '../../components/EditFeatures';
import { ImageService } from '../../services';
import { FEATURES } from '../../utils/constants';

import selectionBackground from '../../assets/images/admin/selection-background.png';

import '../../assets/styles/pages/admin/EditFeatures.css';

export default class EditFeatures extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentFeature: FEATURES[0],
      currentFeatures: [],
      allFeatures: [],
    };

    this.handleChangeFeature = this.handleChangeFeature.bind(this);
    this.onImageUpload = this.onImageUpload.bind(this);
    this.onImageDelete = this.onImageDelete.bind(this);
  }

  componentDidMount() {
    const { currentFeature } = this.state;
    ImageService.getAllImages().then((res) => {
      const { success, result } = res.data;
      if (success) {
        this.setState({
          allFeatures: result,
          currentFeatures: result.filter((r) => r.imageType === currentFeature),
        });
      }
    });
  }

  handleChangeFeature(e) {
    const { allFeatures } = this.state;

    const currValue = e.target.value;

    this.setState({
      currentFeature: currValue,
      currentFeatures: allFeatures.filter(
        (feature) => feature.imageType === currValue,
      ),
    });
  }

  onImageUpload(image) {
    const { currentFeature, allFeatures, currentFeatures } = this.state;
    const formData = new FormData();
    formData.append(currentFeature, image);
    ImageService.uploadImage(formData)
      .then((res) => {
        const { result } = res.data;
        this.setState({
          allFeatures: [...allFeatures, result],
          currentFeatures:
            result.imageType === currentFeature
              ? [...currentFeatures, result]
              : currentFeatures,
        });
        toast.success('Image was successfully uploaded.');
      })
      .catch((err) => {
        const { success, error } = err.response.data;
        if (!error) toast.error('Only .png, .jpg, and .jpeg formats are allowed...');
        else if (!success) toast.error(error);
      });
  }

  onImageDelete(image) {
    const { allFeatures, currentFeatures } = this.state;
    if (window.confirm('Are you sure you want to delete this feature?')) {
      ImageService.deleteImage(image.fileName)
        .then(() => {
          this.setState({
            allFeatures: allFeatures.filter((f) => f.fileName !== image.fileName),
            currentFeatures: currentFeatures.filter(
              (f) => f.fileName !== image.fileName,
            ),
          });
          toast.success('Feature was successfully deleted.');
        })
        .catch(() => {
          toast.error('Failed to delete the image...');
        });
    }
  }

  render() {
    const { currentFeature, currentFeatures } = this.state;

    return (
      <div id="edit-features-page">
        <div className="features-container">
          <div className="title-bar">
            <span className="title-text">Sticker Features</span>
          </div>
          <div className="features-inner">
            <div className="features-selection">
              <select
                value={currentFeature}
                onChange={this.handleChangeFeature}
              >
                {FEATURES.map((feature) => (
                  <option key={feature} value={feature}>
                    {feature}
                  </option>
                ))}
              </select>
              <img src={selectionBackground} alt="Selection Background" />
            </div>
            <FeatureList
              currentFeatures={currentFeatures}
              onImageDelete={this.onImageDelete}
              onImageUpload={this.onImageUpload}
              imageType={currentFeature}
            />
          </div>
        </div>
      </div>
    );
  }
}